import React, {useState} from "react";
import styles from "./Editor.module.css";
import WorkPlace from "../WorkPlace/WorkPlace";
import ToolBar from "../ToolBar/ToolBar";
import SlideList from "../SlideList/SlideList";
import {Presentation as TPresentation} from "../../types/types";
import {useSlideUpdate} from "../../hooks/useSlideUpdate";

type EditorProps = {
    presentation: TPresentation;
    className: string;
};

function MyEditor({presentation, className}: EditorProps) {
    const [currentSlide, setCurrentSlide]= useState(0);
    const {slides, createSlide, deleteSlide} = useSlideUpdate(presentation.presentationSlides);

    return (
        <div className={`${className} ${styles.myEditor}`}>
            <span className={styles.presentation_name}>Papapa{presentation.name}</span>
            <SlideList
                slides={slides}
                createSlide={createSlide}
                deleteSlide={deleteSlide}
                // setCurrentSlide={setCurrentSlide}
                className={styles.slide_list}
            />
            <WorkPlace
                slide={slides[currentSlide]}
                className={styles.workplace_slide}
            />
            <ToolBar
                className={styles.toolbar_slide}
            />
        </div>
    );
}

export default MyEditor;