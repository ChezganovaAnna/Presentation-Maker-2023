import "./Slide.css";
import { ImageContent, Primitive, Slide as TSlide, TextContent, BackImage, BackColor } from "../../types/types";


type SlideProps = {
  slide: TSlide;
};

function Slide({slide}: SlideProps) {
  return (
    <div className="slide">
      <div>{slide.idSlide}</div>
      {slide.background && slide.background.type === 'color' ? (
        <div style={{ backgroundColor: slide.background.color }}>Background color</div>
      ) : slide.background && slide.background.type === 'image' ? (
        <div style={{ backgroundImage: `url(${slide.background.imageSrc})` }}>Background image</div>
      ) : null}
      {slide.slideObject && slide.slideObject.map((object, index) => {
        if (object.type === 'text') {
          return <p key={index}>{object.text}</p>;
        } else if (object.type === 'image') {
          return <img className="objectImg" key={index} src={object.pathImage} alt="Slide image" />;
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default Slide;