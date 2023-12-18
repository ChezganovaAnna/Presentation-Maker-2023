import { useState } from "react";
import { Slide } from "../types/types";

type UseSlideDeletionReturnType = [Array<Slide>, (id: string) => void];

function useSlideDeletion(initialSlides: Array<Slide>): UseSlideDeletionReturnType {
    const [slides, setSlides] = useState<Array<Slide>>(initialSlides);

    function handleDeleteSlide(id: string): void {
        const updatedSlides = slides.filter((slide) => slide.id !== id);
        setSlides(updatedSlides);
    }

    console.log("gagagag");
    return [slides, handleDeleteSlide];
}

export default useSlideDeletion;
