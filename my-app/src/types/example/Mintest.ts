import * as Type from "../../types/types"

const   firstSlide: Type.Slide = {
  idSlide: 1,
  slideObject: [],
}

const editor: Type.Presentation = {
  name: "",
  presentationSlides: [],
  currentSlide: firstSlide,
}

export default editor;