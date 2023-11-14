import styles from "./SlideList.module.css";
import { Slide as SlideT } from "../../types/types";
import Slide from "../Slide/Slide"
import classes from "../Slide/Slide.module.css"

type SlideListProps = {
  currSlide: Array<SlideT>;
  selectSlides: Array<SlideT>;
};
function SlideList({currSlide, selectSlides}:SlideListProps) {
  const objectStyle: React.CSSProperties = {
    transform: 'scale(0.25)',
  };

  return (
    <div className={styles.slider}>
      <div className={styles.child_slide}>
      {currSlide.length > 0 &&
          currSlide.map((slideProp, index) => (
            <div key={slideProp.idSlide} className={styles.circle}>
              <div className={styles.unique_slide}>Слайд номер: {index + 1}</div>
              <div className={styles.packaging}  style={objectStyle}>
                <Slide
                    slide={slideProp}
                    isSelected={selectSlides.includes(slideProp)}
                    className={classes.slide}
                />
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default SlideList;