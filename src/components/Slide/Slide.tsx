import React, { useState } from 'react';
import Block from "../Commons/Block/Block";
import styles from "./Slide.module.css";
import {Slide as SlideType, BackColor, BackImage} from "../../types/types";
import {usePresentationActions} from "../../store/hooks/useRedux";
import {InteractiveLayer} from "../Commons/Overlay/InteractiveLayer";

export type SlideProps = {
  slide: SlideType;
  isSelected: boolean;
  className?: string;
  // onImageChange: (file: File) => void;
  // setBackground: (file: { color: string | undefined; imageSrc: string }) => void;
};

const Slide = ({slide, isSelected, className}: SlideProps) => {
  const presentationActions = usePresentationActions();

  const handleImageChange = (file: File) => {
    const backImage: { imageSrc: string } = {
      imageSrc: URL.createObjectURL(file),
    };
    presentationActions.SetBackground(backImage);
  };

  const [selectedColor, setSelectedColor] = useState<string | undefined>(() => {
    if (slide.background.type === 'color') {
      return slide.background.color;
    }
    return undefined;
  });

  const classNames = `${styles.slide} ${isSelected ? `${className} selectedSlide` : className}`;

  const slideStyle: React.CSSProperties = {
    position: 'relative',
    background: [
      slide.background.type === 'image' ? `url(${slide.background.imageSrc})` : selectedColor,
      slide.background.type === 'color' ? slide.background.color : undefined
    ].join(','),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  const handleChangeBackground: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let newBackground: { color: string | undefined; imageSrc: string };
    // newBackground = {
    //   imageSrc: URL.createObjectURL(event.target.files[0]),
    //   color: selectedColor
    // };
    // setBackground(newBackground);
  };

  const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedColor(event.target.value);
    if (slide.background.type !== "color") {
      const newBackground = {
        imageSrc: slide.background.imageSrc,
        color: event.target.value
      };
    }
    // setBackground(file);
  };

  return (
    <div className={classNames}>
      <InteractiveLayer slide={slide}/>
      <svg className={styles.slide}>
        {slide.objects.map((object) => (
            <Block key={object.id} {...object} id={object.id}/>
        ))}
      </svg>
      {/*<div className={styles.slideBackground} style={slideStyle}>*/}
      {/*  /!* ... *!/*/}
      {/*</div>*/}
      {/*<input type="color" value={selectedColor} onChange={handleColorChange} />*/}
      {/*<input type="file" accept="image/*" onChange={handleChangeBackground} />*/}
    </div>
  )
};

export default Slide;