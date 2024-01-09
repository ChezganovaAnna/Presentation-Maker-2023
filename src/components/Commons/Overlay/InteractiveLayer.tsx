import React from 'react';
import {Slide as SlideType} from "../../../types/types";
import {useAppSelector} from "../../../store/hooks/useRedux";
import {SelectionFrameOverlay} from "./SelectionFrameOverlay";
import {TextAreaOverlay} from "./TextAreaOverlay";
import styles from './InteractiveLayer.module.css';

interface InteractiveLayerProps {
    slide: SlideType;
}

export function InteractiveLayer({ slide }: InteractiveLayerProps) {
    const selected = useAppSelector((state) => state.presentation.objectsSelection);
    const editTextElement = useAppSelector((state) => state.presentation.editTextElement);

    return (
        <div className={styles.interactiveLayer}>
            {selected.length > 0 && <SelectionFrameOverlay slide={slide} />}
            {editTextElement && <TextAreaOverlay slide={slide} objectId={selected[0]} />}
        </div>
    );
}
