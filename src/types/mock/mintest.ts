import {
  Slide,
  Presentation,
  BackColor
} from "../types";
import {v4 as uuidv4} from "uuid";

const backLandscape: BackColor = {
  type: "color",
  color: "blue",
}

const firstSlide: Slide = {
  id: uuidv4(),
  background: backLandscape,
  objects: [],
}

const editor: Presentation = {
  name: "",
  presentationSlides: [firstSlide],
  currentSlide: firstSlide.id,
  objectsSelection: [],
  selectSlides: [],
}

export default editor;