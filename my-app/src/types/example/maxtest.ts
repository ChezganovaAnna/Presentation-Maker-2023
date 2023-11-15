import {
  ImageContent,
  TextContent,
  Primitive,
  BackColor,
  BackImage,
  Slide,
  Presentation,
  Editor,
} from "../types";

const myLovelyImage: ImageContent = {
  type: "image",
  id: 1,
  position: {
    x: 100,
    y: 100,
  },
  size: {
    height: 100,
    width: 100,
  },
  opacity: 1,
  rotate: 50,
  data: {
    imageSrc: "imageLink",
    pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
    alt: "first-image",
  },
}

const textCont: TextContent = {
  type: "text",
  id: 2,
  position: {
    x: 2,
    y: 2,
  },
  size: {
    height: 2,
    width: 2,
  },
  opacity: 2,
  rotate: 2,
  data: {
    text: "2, 22, 222, 2222",
    fontFamily: "Arial",
    fontSize: 20,
    fontColor: "black",
    fontBold: true,
    fontItalica: true,
    fontStrikeThrough: true,
  },
  underline: true,
}

const backLandscape: BackColor = {
  type: "color",
  color: "black",
}

const backLandscape2: BackImage = {
  type: "image",
  imageSrc: "imageLink",
  pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const circle1: Primitive = {
  type: "primitive",
  id: 3,
  position: {
    x: 3,
    y: 3,
  },
  size: {
    height: 3,
    width: 3,
  },
  opacity: 3,
  rotate: 3,
  data: {
    form: "Circle",
    borderColor: "blue",
    borderBold: 3,
    fillColor: "grey",
  },
}

const triangle1: Primitive = {
  type: "primitive",
  id: 4,
  position: {
    x: 4,
    y: 4,
  },
  size: {
    height: 4,
    width: 4,
  },
  opacity: 4,
  rotate: 4,
  data: {
    form: "Triangle",
    borderColor: "blue",
    borderBold: 4,
    fillColor: "grey",
  },
}

const rectangle1: Primitive = {
  type: "primitive",
  id: 5,
  position: {
    x: 5,
    y: 5,
  },
  size: {
    height: 5,
    width: 5,
  },
  opacity: 5,
  rotate: 5,
  data: {
    form: "Rectangle",
    borderColor: "blue",
    borderBold: 5,
    fillColor: "grey",
  },
}

const slides1: Slide = {
  idSlide: 1,
  background: backLandscape,
  objects: [myLovelyImage, textCont, circle1, rectangle1, triangle1],
  selectObjects: [rectangle1, triangle1],
}

const slides2: Slide = {
  idSlide: 2,
  background: backLandscape2,
  objects: [textCont, circle1],
  selectObjects: [textCont, circle1],
}

const myPresentation: Presentation = {
  name: "myPresent",
  presentationSlides: [slides1, slides2],
  currentSlide: slides1,
  selectSlides: [slides1],
}
const editorData: Editor = {
  editorPresentation: myPresentation,
}

export {editorData};