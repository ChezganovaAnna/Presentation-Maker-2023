import styles from "./Editor.module.css";
import { Editor } from "../../types/types";
import WorkPlace from "../../components/WorkPlace/WorkPlace";
import ToolBar from "../ToolBar/ToolBar.tsx";
import SlideList from "../SlideList/SlideList.tsx";

type ViewEditor = {
  presentation: Editor;
};

function MyEditor({ presentation }: ViewEditor) {
  return (
    <div className={styles.myEditor}>
      <p className={styles.presentation_name}>{presentation.editorPresentation.name}</p>
      <div className={styles.slide_list}>
          <SlideList
            slide={presentation.editorPresentation.presentationSlides}
            selectSlides={presentation.editorPresentation.selectSlides}
          />
      </div>
      <div className={styles.workplace_slide}>
         {presentation.editorPresentation.selectSlides.map((slide, index) => (
           <WorkPlace key={index} slide={slide} />
         ))}
      </div>
      <div className={styles.toolbar_slide}>
        <ToolBar/>
      </div>
    </div>
  )
}

export default MyEditor;

