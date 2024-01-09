import React, {RefObject, useEffect, useRef, useState} from 'react';
import styles from './SelectionFrameOverlay.module.css'
import {IRect, Slide as SlideType} from "../../../types/types";
import {useAppSelector} from "../../../store/hooks/useRedux";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import useDisableTouchOnShift from "../../../hooks/useDisableTouchOnShift";

interface SelectionFrameOverlayProps {
    slide: SlideType;
}

export function SelectionFrameOverlay({ slide }: SelectionFrameOverlayProps) {
    const selected = useAppSelector((state) => state.presentation.objectsSelection);

    const [box, setBox] = useState<IRect | null>(null);
    const selectionRef = useRef<HTMLDivElement>(null);
    const handlesRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ] as RefObject<HTMLDivElement>[];

    useEffect(() => {
        const newBox = calculateSelectionRect(slide, selected);
        setBox(newBox);
    }, [slide, selected]);

    useDragAndDrop(selectionRef);
    useDisableTouchOnShift([selectionRef, ...handlesRefs]);

    return (
        <div className={styles.overlayFrame}>
            {box && (
                <div ref={selectionRef} className={styles.wireframe} style={{
                    left: box.x - 2.5,
                    top: box.y - 2.5,
                    width: box.width,
                    height: box.height,
                }}>
                    {handlesRefs.map((ref, index) => (
                        <div key={index} ref={ref} className={styles[`anchor${index}`]} />
                    ))}
                </div>
            )}
        </div>
    );
}

function calculateSelectionRect(slide: SlideType, ids: string[]): IRect | null {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    slide.objects.forEach(obj => {
        if (ids.includes(obj.id)) {
            const {position, size} = obj;
            minX = Math.min(minX, position.x);
            minY = Math.min(minY, position.y);
            maxX = Math.max(maxX, position.x + size.width);
            maxY = Math.max(maxY, position.y + size.height);
        }
    });

    if (minX === Infinity || minY === Infinity || maxX === -Infinity || maxY === -Infinity) {
        return null
    }

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}