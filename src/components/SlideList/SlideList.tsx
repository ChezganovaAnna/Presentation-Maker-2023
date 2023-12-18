import React, {useState} from "react";
import styles from "./SlideList.module.css";
import { Slide as TSlide, Position as TPosition, Presentation as TPresentation } from "../../types/types";
import Slide from "../Slide/Slide";
import classes from "../Slide/Slide.module.css";
import { v4 as uuidv4 } from "uuid";
import useSlideCreation from "../../hooks/useSlideCreation";
import useSlideDeletion from "../../hooks/useSlideDeletion";


function useSlideUpdate(initialSlides: Array<TSlide>) {
    const [slides, setSlides] = useState(initialSlides);

    const createSlide = () => {
        const newSlide: TSlide = {
            id: uuidv4(),
            background: { type: "color", color: "white" },
            objects: [],
            selectObjects: [],
            selected: false,
        };
        setSlides([...slides, newSlide]);
    };

    const deleteSlide = (slideId: string) => {
        const updatedSlides = slides.filter((slide: TSlide) => slide.id !== slideId);
        setSlides(updatedSlides);
    };

    return {
        slides,
        createSlide,
        deleteSlide,
    };
}

type SlideListProps = {
    slides: Array<TSlide>;
    className: string;
};

function SlideList({ slides, className}: SlideListProps) {
    const objectStyle: React.CSSProperties = {
        transform: "scale(0.25)",
    };

    const { slides: updatedSlides, createSlide, deleteSlide } = useSlideUpdate(slides);

    return (
        <div className={`${className} ${styles.slider}`}>
            <button onClick={() => createSlide()}>Click here to create slide</button>
            <div className={styles.child_slide}>
                {updatedSlides.map((slide, index) => (
                    <div key={slide.id} className={styles.circle}>
                        <button onClick={() => deleteSlide(slide.id)}>Click here to delete slide</button>
                        <div className={styles.unique_slide}>Слайд номер: {index + 1}</div>
                        <div className={styles.packaging} style={objectStyle}>{slide.id}
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
