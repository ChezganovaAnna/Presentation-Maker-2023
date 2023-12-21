import {Slide as TSlide} from "../types/types";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";


export function useSlideUpdate(initialSlides: Array<TSlide>) {
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
