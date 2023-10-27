import "./Slide.css";
import { ImageContent, Primitive, Slide as TSlide, TextContent, BackImage, BackColor } from "../../types/types";


type SlideProps = {
  slide: TSlide;
};

function Slide({slide}: SlideProps) {
  return (
    <div className="slide">
      <h1>{slide.idSlide}</h1>
      <h2>{slide.background?.color}</h2>
    </div>
  )
}

export default Slide;