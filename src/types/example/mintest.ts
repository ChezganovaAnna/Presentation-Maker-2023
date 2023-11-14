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
  idSlide: uuidv4(),
  objects: [],
  selectObjects: [],
  background: backLandscape,
}

const editor: Presentation = {
  name: "",
  presentationSlides: [],
  currentSlide: firstSlide,
  selectSlides: [],
}

export default editor;