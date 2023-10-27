import "./editor.css";
import { Editor } from "../../types/types";
import SlideList from "../../components/SlideList/SlideList";
import WorkPlace from "../../components/WorkPlace/WorkPlace";
import Head from "../Head/Head";

type ViewEditor = {
  presentation: Editor;
};

function MyEditor({ presentation }: ViewEditor) {
  const {name, presentationSlides, currentSlide} = presentation.editorPresentation;
  const {selectedSlides, selectedObjects} = presentation.selection;
  return (
    <div className="myEditor">
      <Head/>
      <div className="main">
        <SlideList/>
        <WorkPlace slide={currentSlide} />
      </div>
    </div>
  )
};

export default MyEditor;

// function MyEditor({ presentation }: ViewEditor) {
//   const {name, presentationSlides} = presentation.editorPresentation;
//   const {selectedSlides, selectedObjects} = presentation.selection;
//   // const {idSlide} = presentation.editorPresentation.currentSlide;
//     return (
//     <div className="myEditor">
//       <h1>{name}</h1>
//       <SlideList
//         selectedSlides={selectedSlides}
//         slides={presentationSlides}
//         selectedObjects={selectedObjects}
//       />
//       <WorkPlace slide={presentation.editorPresentation.currentSlide.idSlide} />
//     </div>
//   );
// }
