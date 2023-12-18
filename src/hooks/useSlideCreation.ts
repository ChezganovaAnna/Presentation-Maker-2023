import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Slide } from "../types/types";

function useSlideCreation(initialSlides: Array<Slide>): [Array<Slide>, () => void] {
    const [slides, setSlides] = useState<Array<Slide>>(initialSlides);
    function handleCreateSlide() {
        const newSlide: Slide = {
            id: uuidv4(),
            background: { type: "color", color: "white" },
            objects: [],
            selectObjects: [],
            selected: false,
        };
        setSlides([...slides, newSlide]);
    }
    return [slides, handleCreateSlide];
}

export default useSlideCreation;
