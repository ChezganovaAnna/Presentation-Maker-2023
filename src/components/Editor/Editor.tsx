import React from "react";
import styles from "./Editor.module.css";
import WorkPlace from "../WorkPlace/WorkPlace";
import ToolBar from "../ToolBar/ToolBar";
import SlideList from "../SlideList/SlideList";
import { Presentation as TPresentation } from "../../types/types";

type EditorProps = {
  presentation: TPresentation;
  className: string;
};

function MyEditor({ presentation, className }: EditorProps) {
  return (
    <div className={`${className} ${styles.myEditor}`}>
        <span className={styles.presentation_name}>Papapa{presentation.name}</span>
        <SlideList
            slides={presentation.presentationSlides}
            className={styles.slide_list}
        />
        <WorkPlace
            slide={presentation.currentSlide}
            className={styles.workplace_slide}
        />
        <ToolBar
            className={styles.toolbar_slide}
        />
    </div>
  );
}

export default MyEditor;