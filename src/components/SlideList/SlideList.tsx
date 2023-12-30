import React from "react";
import styles from "./SlideList.module.css";
import {Slide as TSlide} from "../../types/types";
import Slide from "../Slide/Slide";
import {useAppSelector, usePresentationActions} from "../../store/hooks/useRedux";

type SlideListProps = {
    className: string;
};

function SlideList({className}: SlideListProps) {
    const objectStyle: React.CSSProperties = {
        transform: "scale(0.25)",
    };

    const slides = useAppSelector(state => state.presentation.presentationSlides);
    const presentationActions = usePresentationActions()

    return (
        <div className={`${className} ${styles.slider}`}>
            <button onClick={presentationActions.createSlide}>Click here to create slide</button>
            <div className={styles.child_slide}>
                {slides.map((slide: TSlide, index: number) => (
                    <div key={slide.id} className={styles.circle}>
                        <button onClick={() => presentationActions.deleteSlide(slide.id)}>Click here to delete slide
                        </button>
                        <div className={styles.unique_slide}>Слайд номер: {index + 1}</div>
                        <div
                            className={styles.packaging}
                            style={objectStyle}
                            onClick={() => presentationActions.selectSlide(slide.id)}
                        >
                            {slide.id}
                            <Slide
                                slide={slide}
                                isSelected={false}
                                className={styles.slide}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlideList;