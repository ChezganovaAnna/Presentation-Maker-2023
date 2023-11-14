import {
  Slide,
  Presentation,
} from "../types";

const firstSlide: Slide = {
  idSlide: 1,
  objects: [],
  selectObjects: []
}

const editor: Presentation = {
  name: "",
  presentationSlides: [],
  currentSlide: firstSlide,
  selectSlides: [],
}

export default editor;