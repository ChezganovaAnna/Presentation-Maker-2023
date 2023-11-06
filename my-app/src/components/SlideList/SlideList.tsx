import "./SlideList.css";
import { Slide } from "../../types/types";
// import  from "../../types/example/maxtest";

type SlideListProps = {
  slide: Array<Slide>;
  selectSlides: Array<Slide>;
};
function SlideList({slide, selectSlides}:SlideListProps) {
  if (slide.length === 0) {
    return <div>No slides to display</div>;
  }
  return (
    <div className="slaider">
      Слайд лист
      {slide.map((slide, index) => (
        <div key={slide.idSlide} className="unique_slide">
          <p>{index}"i'm index"</p>
          <h2>{slide.idSlide}</h2>
        </div>
      ))}
    </div>
  )
}

export default SlideList;