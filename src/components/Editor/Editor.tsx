import React from 'react';
import styles from './Editor.module.css';
import WorkPlace from '../WorkPlace/WorkPlace';
import ToolBar from '../ToolBar/ToolBar';
import SlideList from '../SlideList/SlideList';
import { Editor } from '../../types/types';

type ViewEditor = {
    presentation: Editor;
};

function MyEditor({ presentation }: ViewEditor) {
    return (
        <div className={styles.myEditor}>
            <p className={styles.presentation_name}>{presentation.editorPresentation.name}</p>
            <div className={styles.slide_list}>
                <SlideList
                    currSlide={presentation.editorPresentation.presentationSlides}
                    selectSlides={presentation.editorPresentation.selectSlides}
                />
            </div>
            <div className={styles.workplace_slide}>
                {presentation.editorPresentation.selectSlides.map((slide, index) => (
                    <WorkPlace key={index} slide={slide} />
                ))}
            </div>
            <div className={styles.toolbar_slide}>
                <ToolBar />
            </div>
        </div>
    );
}

export default MyEditor;