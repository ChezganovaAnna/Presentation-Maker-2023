import React, {useState, useContext} from "react";
import styles from "./SlideList.module.css";
import { Slide as TSlide, Position as TPosition, Presentation} from "../../types/types";
import Slide from "../Slide/Slide";
import classes from "../Slide/Slide.module.css";
import { v4 as uuidv4 } from "uuid";
import {useSlideUpdate} from "../../hooks/useSlideUpdate";
import {PresentationContext} from "../../context/presentation";

type SlideListProps = {
    slides: Array<TSlide>;
    onSlideSelect: TSlide | null;
    onSlideCreate: () => void;
    onSlideDelete: (slideId : string) => void;
    className: string;
};

function SlideList({ slides, className, onSlideSelect, onSlideDelete, onSlideCreate}: SlideListProps) {
    const objectStyle: React.CSSProperties = {
        transform: "scale(0.25)",
    };

    //const {slides, createSlide, deleteSlide} = useSlideUpdate(CurrSlides);
    //const { handleSetCurrentSlide } = useCurrentSlide();

    return (
        <div className={`${className} ${styles.slider}`}>
            <button onClick={onSlideCreate}>Click here to create slide</button>
            <div className={styles.child_slide}>
                {slides.map((slide: TSlide, index: number) => (
                    <div key={slide.id} className={styles.circle}>
                        <button onClick={() => onSlideDelete(slide.id)}>Click here to delete slide</button>
                        <div className={styles.unique_slide}>Слайд номер: {index + 1}</div>
                        <div
                            className={styles.packaging}
                            style={objectStyle}

                            //onClick={() => setCurrentSlide(slide.id)}
                        >
                            {slide.id}
                            <Slide
                                slide={slide}
                                isSelected={false}
                                className={classes.slide}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlideList;