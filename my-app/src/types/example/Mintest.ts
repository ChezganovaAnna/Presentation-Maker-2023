import {
  Slide,
  Presentation, BackColor, BackImage, TextContent, ImageContent, Primitive
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