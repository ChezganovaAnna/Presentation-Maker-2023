import Slide from "../../components/Slide/slide";
import { Slide as TSlide } from "../../types/types";
import "./WorkPlace.css"

type WorkspaceProps = {
  slide: TSlide;
};

function WorkPlace({slide}:WorkspaceProps) {
  return (
    <div>
      {slide && (
      <Slide
        slide={slide}
        isSelected={true}
        className="workplace_slide"
      />
      )}
    </div>
  )
}

export default WorkPlace;