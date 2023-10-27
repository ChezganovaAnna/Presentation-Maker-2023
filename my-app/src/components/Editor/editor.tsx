import "./editor.css";
import { Editor } from "../../types/types";
import SlideList from "../../components/SlideList/SlideList";
import WorkPlace from "../../components/WorkPlace/WorkPlace";

type ViewEditor = {
  presentation: Editor;
};

// function MyEditor({ presentation }: ViewEditor) {
  // const {name, presentationSlides} = presentation.editorPresentation;
  // const {selectedSlides, selectedObjects} = presentation.selection;
  // const{idSlide} = presentation.editorPresentation.currentSlide;
  //   return (
  //   <div className="myEditor">
  //     <h1>{name}</h1>
  //     <SlideList
  //       selectedSlides={selectedSlides}
  //       slides={presentationSlides}
  //       selectedObjects={selectedObjects}
  //     />
  //     <WorkPlace slide={idSlide} />
  //   </div>
  // );
// }

function MyEditor({ presentation }: ViewEditor) {
  return (
    <div className="myEditor">
      <SlideList/>
      <WorkPlace/>
      console.log('')
    </div>
  )
};

export default MyEditor;