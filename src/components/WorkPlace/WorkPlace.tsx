import React, { FC } from "react";
import Slide from "../Slide/Slide";
import SlideProps from "../Slide/Slide";
import styles from "./WorkPlace.module.css";
import { useAppSelector } from "../../store/hooks/useRedux";
import { useDispatch } from 'react-redux';
import { SET_BACKGROUND } from "../../store/actions/presentationActions";

interface WorkplaceProps {
    className: string;
}

const WorkPlace: FC<WorkplaceProps> = ({ className }: WorkplaceProps) => {
    const dispatch = useDispatch();
    const currentSlideId = useAppSelector((state) => state.presentation.currentSlide);
    const slides = useAppSelector((state) => state.presentation.presentationSlides);
    const currentSlide = slides.find((slide) => slide.id === currentSlideId);

    const handleImageChange = (file: File) => {
        dispatch({ type: SET_BACKGROUND, payload: file });
    };

    return (
      <div className={styles.main_slide}>
          {currentSlide && (
            <Slide
              slide={currentSlide}
              isSelected={true}
              className={styles.workplace_slide}
              // onImageChange={handleImageChange}
              // setBackground={() => {}}
            />
          )}
      </div>
    );
}

export default WorkPlace;