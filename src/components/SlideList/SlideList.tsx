import React, {useState, useRef} from "react";
import styles from "./SlideList.module.css";
import { Slide as TSlide, Position as TPosition, Presentation as TPresentation } from "../../types/types";
import Slide from "../Slide/Slide";
import classes from "../Slide/Slide.module.css";
import useSlideUpdate from "../../hooks/useSlideListDrag"

type SlideListProps = {
    slides: Array<TSlide>;
    createSlide: () => void;
    deleteSlide: (id: string) => void;
    className: string;
};

function SlideList({ slides, className, createSlide, deleteSlide}: SlideListProps) {
    const objectStyle: React.CSSProperties = {
        transform: "scale(0.25)",
    };

  const { updatedSlides, handleDragOver, handleDrop, handleOrderChange } = useSlideUpdate(slides);

  const ref = useRef(null);

    return (
      <div ref={ref} className={`${className} ${styles.slider}`}>
            <button onClick={() => createSlide()}>Click here to create slide</button>
            <div className={styles.child_slide}>
                {updatedSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={styles.circle}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("text/plain", `${slide.id}-${index}`);
                    }}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                  >
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
