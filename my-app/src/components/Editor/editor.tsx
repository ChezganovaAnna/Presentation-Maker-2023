import "./Editor.css";
import { Editor } from "../../types/types";
import WorkPlace from "../../components/WorkPlace/WorkPlace";
import ToolBar from "../ToolBar/ToolBar.tsx";
import SlideList from "../SlideList/SlideList.tsx";

type ViewEditor = {
  presentation: Editor;
};

function MyEditor({ presentation }: ViewEditor) {
  return (
    <div className="myEditor">
      <p className="presentation_name">{presentation.editorPresentation.name}</p>
      <div className="main">
        <SlideList
          slide={presentation.editorPresentation.presentationSlides}
          selectSlides={presentation.editorPresentation.selectSlides}
        />
        <WorkPlace slide={presentation.editorPresentation.selectSlides}/>
        <ToolBar/>
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
