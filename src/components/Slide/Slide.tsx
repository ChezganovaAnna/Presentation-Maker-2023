import React, { useState } from 'react';
import Block from "../Commons/Block/Block";
import styles from "./Slide.module.css";
import {Slide as SlideType, BackColor, BackImage} from "../../types/types";
import {usePresentationActions} from "../../store/hooks/useRedux";

export type SlideProps = {
  slide: SlideType;
  isSelected: boolean;
  className?: string;
  // onImageChange: (file: File) => void;
  // setBackground: (file: { color: string | undefined; imageSrc: string }) => void;
};

const Slide = ({ slide, isSelected, className }: SlideProps) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    slide.background.type === "color" ? slide.background.color : undefined
  );

  const classNames = `${styles.slide} ${
    isSelected ? `${className} selectedSlide` : className
  }`;

  const slideStyle: React.CSSProperties = {
    position: "relative",
    background: selectedColor,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  // const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setSelectedColor(event.target.value);
  //   if (slide.background.type !== "color") {
  //     const newBackground = {
  //       imageSrc: slide.background.imageSrc,
  //       color: event.target.value
  //     };
  //   }
  //   // setBackground(file);
  // };
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className={classNames} style={slideStyle}>
      <svg width={"100%"} height={"100%"}>
        {slide.objects.map((object) => (
            <Block key={object.id} {...object} id={object.id}/>
        ))}
      </svg>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
    </div>
  )
};

export default Slide;