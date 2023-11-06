import {
  Slide,
  Presentation,
} from "../types";

const firstSlide: Slide = {
  idSlide: 1,
  objects: [],
  slideObjects: [],
}

const editor: Presentation = {
  name: "",
  presentationSlides: [],
  currentSlide: firstSlide,
  selectSlides: [],
}

export default editor;