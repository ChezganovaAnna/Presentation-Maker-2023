import Slide from "../../components/Slide/slide";
import { Slide as TSlide } from "../../types/types";

type WorkspaceProps = {
  slide: TSlide;
};

function WorkPlace({slide} : WorkspaceProps) {
  return (
    <div>
      <Slide
        slide={slide}
      />
    </div>
  )

}

export default WorkPlace;