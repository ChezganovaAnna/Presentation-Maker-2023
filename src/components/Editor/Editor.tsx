import React, {useState} from "react";
import styles from "./Editor.module.css";
import WorkPlace from "../WorkPlace/WorkPlace";
import ToolBar from "../ToolBar/ToolBar";
import SlideList from "../SlideList/SlideList";
import {Presentation as TPresentation, Slide} from "../../types/types";
import {useSlideUpdate} from "../../hooks/useSlideUpdate";
import {useSlideSelect} from "../../hooks/useSlideSelect";

type EditorProps = {
    presentation: TPresentation;
    className: string;
};

function MyEditor({presentation, className}: EditorProps) {


    const [UpdatedNewSlide, SetCurrentSlide] = useSlideSelect(presentation.currentSlide);

    //const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);
    const {slides, createSlide, deleteSlide} = useSlideUpdate(presentation.presentationSlides);


    return (
        <div className={`${className} ${styles.myEditor}`}>
            <span className={styles.presentation_name}>{presentation.name}</span>
            <SlideList
                slides={slides}
                onSlideSelect={SetCurrentSlide}
                onSlideCreate={createSlide}
                onSlideDelete={deleteSlide}
                className={styles.slide_list}
            />
            <WorkPlace
                slide={UpdatedNewSlide}
                className={styles.workplace_slide}
            />
            <ToolBar
                className={styles.toolbar_slide}
            />
        </div>
    );
}

export default MyEditor;