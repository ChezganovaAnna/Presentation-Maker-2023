import { v4 as uuidv4 } from "uuid";
import {
  ImageContent,
  TextContent,
  Primitive,
  AllowedFonts,
  Size,
  BackColor,
  BackImage,
  Slide,
  Presentation,
  Editor,
} from "../types";

const fontFamily: AllowedFonts = "verdana";

const size: Size = {
  height: 100,
  width: 300,
};

const myLovelyImage: ImageContent = {
  type: "image",
  id: uuidv4(),
  position: {
    x: 100,
    y: 100,
  },
  size: size,
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
  id: uuidv4(),
  position: {
    x: 100,
    y: 200,
  },
  size: size,
  opacity: 1,
  rotate: 0,
  data: {
    text: "Welcome to the end of days",
    fontFamily: fontFamily,
    fontSize: 20,
    fontColor: "red",
    fontBold: true,
    fontItalica: true,
    fontStrikeThrough: true,
  },
  underline: true,
}

const textCont1: TextContent = {
  type: "text",
  id: uuidv4(),
  position: {
    x: 200,
    y: 300,
  },
  size: size,
  opacity: 1,
  rotate: 0,
  data: {
    text: "Welcome to the end of eras",
    fontFamily: fontFamily,
    fontSize: 20,
    fontColor: "green",
    fontBold: false,
    fontItalica: false,
    fontStrikeThrough: false,
  },
  underline: false,
}

const backLandscape: BackColor = {
  type: "color",
  color: "pink",
}

const backLandscape2: BackImage = {
  type: "image",
  imageSrc: "imageLink",
  pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const circle1: Primitive = {
  type: "primitive",
  id: uuidv4(),
  position: {
    x: 3,
    y: 3,
  },
  size: {
    height: 15,
    width: 15,
  },
  opacity: 3,
  rotate: 3,
  data: {
    form: "Ellipse",
    borderColor: "blue",
    borderBold: 3,
    fillColor: "grey",
  },
}

const triangle1: Primitive = {
  type: "primitive",
  id: uuidv4(),
  position: {
    x: 4,
    y: 4,
  },
  size: {
    height: 15,
    width: 15,
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
  id: uuidv4(),
  position: {
    x: 5,
    y: 5,
  },
  size: {
    height: 15,
    width: 15,
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
  idSlide: uuidv4(),
  background: backLandscape,
  objects: [myLovelyImage, textCont, circle1, rectangle1, triangle1, textCont1],
  selectObjects: [rectangle1, triangle1],
}

const slides2: Slide = {
  idSlide: uuidv4(),
  background: backLandscape2,
  objects: [textCont, circle1, textCont1],
  selectObjects: [textCont, circle1],
}

const myPresentation: Presentation = {
  name: "myPresent",
  presentationSlides: [slides1, slides2, slides1, slides1, slides1],
  currentSlide: slides1,
  selectSlides: [slides1],
}
const editorData: Editor = {
  editorPresentation: myPresentation,
}

export {editorData};