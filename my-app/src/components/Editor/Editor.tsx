import React from 'react';
import styles from './Editor.module.css';
import main from '../../App.module.css'
import WorkPlace from '../WorkPlace/WorkPlace';
import ToolBar from '../ToolBar/ToolBar';
import SlideList from '../SlideList/SlideList';
import { Editor } from '../../types/types';


type EditorProps = {
    presentation: Editor;
    className: string;
};

function MyEditor({ presentation, className }: EditorProps) {
    return (
      <div className={`${className} ${styles.myEditor}`}>
        <p className={styles.presentation_name}>{presentation.editorPresentation.name}</p>
        <SlideList
          currSlide={presentation.editorPresentation.presentationSlides}
          selectSlides={presentation.editorPresentation.selectSlides}
          className={styles.slide_list}
        />
        {presentation.editorPresentation.selectSlides.map((slide, index) => (
          <WorkPlace key={index} slide={slide} className={styles.workplace_slide}/>
        ))}
        <ToolBar className={styles.toolbar_slide}/>
      </div>
    );
}

export default MyEditor;