import { useState, useContext } from "react";
import { PresentationContext } from '../context/presentation';
import { Slide, Presentation } from "../types/types";

export const useSlideSelect = (initialSlide: string | null) => {
    const [CurrSlide, setCurrSlide] = useState(initialSlide);
    const { presentation, setPresentation } = useContext(PresentationContext);

    const UpdatedNewSlide = CurrSlide;

    const SetCurrentSlide = (slideId: string) => {
        setCurrSlide(slideId);
        const param = {
            ...presentation,
            currentSlide: slideId
        };
        setPresentation(param);
    };

    return {
        UpdatedNewSlide,
        SetCurrentSlide
    };
};