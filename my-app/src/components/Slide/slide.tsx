import "./Slide.css";
import { Slide as TSlide, ImageContent } from "../../types/types";
import React from 'react';
import ImageComponent from "../Commons/Image/Image.tsx";

type SlideProps = {
  slide: TSlide;
  isSelected: boolean;
  className?: string;
};

function Slide({slide, isSelected, className}: SlideProps) {
  console.log('slide', slide)
  const slideStyle: React.CSSProperties = {
    position: 'relative',
    background: slide.background?.type === "color"
        ? slide.background.color
        : slide.background?.imageSrc
          ? `url(${slide.background.imageSrc})`
          : undefined,
  };
  // if (isSelected) { /*selectedSlide это класс  отображение слайда (то, что пользователь НЕ кидает) и
  // и его нужно засунуть сюда, чтобы отображался*/
  //     let classNameIsSelected = selectedSlide
  // }
  const classNameIsSelected = isSelected ? `${className} selectedSlide` : className;

  return (
  <div className={`slide ${classNameIsSelected}`} style={slideStyle}>
    <h2>{slide.idSlide}</h2>
    {slide.objects.map((object, index) => {
      if (object.type === 'image') {
        const imageObject = object as ImageContent;
        if (imageObject.data.imageSrc === 'imagebase64') {
          return <img src={`data:image/png;base64, ${imageObject.data.pathImage}`} alt={imageObject.data.alt} />;
        } else {
          return <ImageComponent key={index} data={imageObject} />;
        }
      }
      return null;
    })}
  </div>)
}

export default Slide;





