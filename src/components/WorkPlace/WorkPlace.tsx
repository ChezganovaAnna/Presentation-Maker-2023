import Slide from "../Slide/Slide";
import styles from "./WorkPlace.module.css"
import {useAppSelector} from "../../store/hooks/useRedux";

type WorkspaceProps = {
    className: string;
};

function WorkPlace({className}: WorkspaceProps) {
    const slide = useAppSelector(state =>
        state.presentation.presentationSlides.find(element => element.id == state.presentation.currentSlide)
    )
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