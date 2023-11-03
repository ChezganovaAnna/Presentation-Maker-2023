import {
  BackColor,
  BackImage,
  Editor,
  ImageContent,
  Presentation,
  Primitive,
  Selected,
  Slide,
  TextContent
} from "../types";

const myLovelyImage: ImageContent = {
  id: 1,
  x: 1,
  y: 1,
  height: 1,
  width: 1,
  opacity: 1,
  rotate: 1,
  type: "image",
  imageSrc: "imageLink",
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const textCont: TextContent = {
  id: 2,
  x: 2,
  y: 2,
  height: 2,
  width: 2,
  opacity: 2,
  rotate: 2,
  type: "text",
  text: "2, 22, 222, 2222",
  fontFamily: "Arial",
  fontSize: 20,
  fontColor: "black",
  fontBold: true,
  fontItalica: true,
  underline: true,
  fontStrikeThrough: true,
}

const backLandscape: BackColor = {
  type: "color",
  color: "black",
}

const backLandscape2: BackImage = {
  type: "image",
  imageSrc: "imageLink",
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const circle1: Primitive = {
  id: 3,
  x: 3,
  y: 3,
  height: 3,
  width: 3,
  opacity: 3,
  rotate: 3,
  type: "Circle",
  borderColor: "blue",
  primitiveX: 3,
  primitiveY: 3,
  borderBold: 3,
  fillColor: "grey",
}

const triangle1: Primitive = {
  id: 4,
  x: 4,
  y: 4,
  height: 4,
  width: 4,
  opacity: 4,
  rotate: 4,
  type: "Triangle",
  borderColor: "blue",
  primitiveX: 4,
  primitiveY: 4,
  borderBold: 4,
  fillColor: "grey",
}

const rectangle1: Primitive = {
  id: 5,
  x: 5,
  y: 5,
  height: 5,
  width: 5,
  opacity: 5,
  rotate: 5,
  type: "Rectangle",
  borderColor: "blue",
  primitiveX: 5,
  primitiveY: 5,
  borderBold: 5,
  fillColor: "grey",
}

const slides1: Slide = {
  idSlide: 1,
  background: backLandscape,
  slideObject: [myLovelyImage, textCont, circle1, rectangle1, triangle1],
}

const slides2: Slide = {
  idSlide: 2,
  background: backLandscape2,
  slideObject: [textCont, circle1],
}

const myPresentation: Presentation = {
  name: "myPresent",
  presentationSlides: [slides1, slides2],
  currentSlide: slides1,
}

const selectionInPresentation: Selected = {
  selectedSlides: [1],
  selectedObjects: [2],
}

const editorData: Editor = {
  editorPresentation: myPresentation,
  selection: selectionInPresentation,
}

export {editorData};

