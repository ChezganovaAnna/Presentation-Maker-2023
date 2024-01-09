import React, {useEffect, useRef} from 'react';
import {Slide as SlideType} from '../../../types/types';
import styles from './TextAreaOverlay.module.css';

interface TextAreaOverlayProps {
    slide: SlideType;
    objectId: string;
}

export function TextAreaOverlay({ slide, objectId }: TextAreaOverlayProps) {
    const obj = slide.objects.find(o => o.id === objectId);

    const overlayRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!obj || obj.type !== 'text') return;

        const { position, size } = obj;
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.width = `${size.width}px`;
            textarea.style.height = `${size.height}px`;
            textarea.style.left = `${position.x - 2.5}px`;
            textarea.style.top = `${position.y - 2.5}px`;
        }
    }, [obj, objectId]);

    if (!obj || obj.type !== 'text') return null;

    return (
        <div ref={overlayRef} className={styles.textOverlay}>
            <textarea ref={textareaRef} className={styles.textarea} />
        </div>
    );
}