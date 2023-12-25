import {Slide as TSlide, Presentation} from "../types/types";
import {useState, useContext} from "react";
import {v4 as uuidv4} from "uuid";
import {PresentationContext} from "../context/presentation";

export function useSlideUpdate(initialSlides: Array<TSlide>) {
    const [slides, setSlides] = useState(initialSlides);
    const { presentation, setPresentation } = useContext(PresentationContext);

    const createSlide = () => {
        const newSlide: TSlide = {
            id: uuidv4(),
            background: { type: "color", color: "white" },
            objects: [],
            selectObjects: [],
            selected: false,
        };
        setSlides([...slides, newSlide]);

       const param =  {
                ...presentation,
                presentationSlides: [...presentation.presentationSlides, newSlide],
            };

        setPresentation(param);
    };

    const deleteSlide = (slideId: string) => {
        const updatedSlides = slides.filter((slide: TSlide) => slide.id !== slideId);
        setSlides(updatedSlides);
        // @ts-ignore
        setPresentation((prevPresentation: Presentation): Presentation => {
            return {
                ...prevPresentation,
                presentationSlides: prevPresentation.presentationSlides.filter(slide => slide.id !== slideId),
            };
        });
    };


    return {
        slides,
        createSlide,
        deleteSlide,
    };
}