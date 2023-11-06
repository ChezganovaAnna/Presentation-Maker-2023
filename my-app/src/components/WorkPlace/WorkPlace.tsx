import Slide from "../../components/Slide/slide";
import { Slide as TSlide } from "../../types/types";

type WorkspaceProps = {
  slide: TSlide;
};

function WorkPlace({slide}:WorkspaceProps) {
  return (
    <div>
      {slide.idSlide}

      <Slide/>
    </div>
  )

}

export default WorkPlace;