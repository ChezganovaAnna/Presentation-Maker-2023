import { useState } from 'react';
import { Slide as TSlide } from "../types/types";

function useSlideUpdate(initialSlides: Array<TSlide>) {
  const [slides, setSlides] = useState<TSlide[]>(initialSlides);
  const updatedSlides = [...slides];
  const handleOrderChange = (fromIndex: number, toIndex: number) => {
    const [removedSlide] = updatedSlides.splice(fromIndex, 1);
    updatedSlides.splice(toIndex, 0, removedSlide);
    setSlides(updatedSlides);
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, toIndex: number) => {
    e.preventDefault();
    const fromIndex = Number(e.dataTransfer.getData("text/plain").split("-")[1]);
    console.log(fromIndex);
    handleOrderChange(fromIndex, toIndex);
  };

  return {
    updatedSlides,
    handleDragOver,
    handleDrop,
    handleOrderChange,
  };
}

export default useSlideUpdate;