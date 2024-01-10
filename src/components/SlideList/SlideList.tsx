import React from "react";
import styles from "./SlideList.module.css";
import {Slide as TSlide} from "../../types/types";
import Slide from "../Slide/Slide";
import {useAppSelector, usePresentationActions} from "../../store/hooks/useRedux";


function SlideList() {
    const objectStyle: React.CSSProperties = {
        transform: "scale(0.25)",
    };
    const presentationActions = usePresentationActions();

    const slides = useAppSelector((state) => state.presentation.presentationSlides);

    return (
        <div className={styles.slider}>
            <div className={styles.child_slide}>
                {slides.map((slide: TSlide, index: number) => (
                    <div key={slide.id} className={styles.circle}>
                        <div className={styles.unique_slide}>Слайд номер: {index + 1}</div>
                        <div
                            className={styles.packaging}
                            style={objectStyle}
                            onClick={() => presentationActions.selectSlide(slide.id)}
                        >
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