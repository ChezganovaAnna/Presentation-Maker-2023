import "./Slide.css";
import { Slide as TSlide } from "../../types/types";


type SlideProps = {
  slide: TSlide;
  isSelected: boolean;
  className?: string;
};

function Slide({slide, isSelected, className}: SlideProps) {

  console.log('slide', slide)
  const slideStyle: React.CSSProperties = {
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

  </div>)
}

export default Slide;