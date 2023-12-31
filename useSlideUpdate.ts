import {Slide as TSlide} from "../types/types";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";



export function useSlideUpdate(initialSlides: Array<TSlide>) {
    const [newSlides, setSlides] = useState(initialSlides);

    const createSlide = () => {
        const newSlide: TSlide = {
            id: uuidv4(),
            background: { type: "color", color: "white" },
            objects: [],
            selectObjects: [],
            selected: false,
        };
        setSlides([...newSlides, newSlide]);
    };

    const deleteSlide = (slideId: string) => {
        const updatedSlides = newSlides.filter((slide: TSlide) => slide.id !== slideId);
        setSlides(updatedSlides);
    };

    return {
        newSlides,
        createSlide,
        deleteSlide,
    };
}
