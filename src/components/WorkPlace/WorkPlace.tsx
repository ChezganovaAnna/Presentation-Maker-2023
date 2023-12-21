import Slide from "../Slide/Slide";
import { Slide as TSlide } from "../../types/types";
import styles from "./WorkPlace.module.css"

type WorkspaceProps = {
  slide: TSlide | null;
  className: string;
};

function WorkPlace({slide, className}: WorkspaceProps) {

  return (
    <div className={styles.main_slide}>
      {slide && (
      <Slide
        slide={slide}
        isSelected={true}
        className={styles.workplace_slide}
      />
      )}
    </div>
  )
}

export default WorkPlace;