import { v4 as uuidv4 } from "uuid";
import {
  Position,
  Size,
  ImageContent,
  TextContent,
  Primitive,
  BackColor,
  BackImage,
  Slide,
  Presentation,
} from "../types";

const position: Position = {
  x: 0,
  y: 100,
}

const size: Size = {
  height: 100,
  width: 300,
};

const myLovelyImage: ImageContent = {
  type: "image",
  id: uuidv4(),
  data: {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
    alt: "first-image",
    size: size,
  },
  position: {
    x: 20,
    y: 20,
  },
  size: {
    width: 25,
    height: 25,
  },
  rotate: 0,
};

const textCont: TextContent = {
  type: "text",
  id: uuidv4(),
  position: {
    x: 100,
    y: 200,
  },
  size: {
    width: 25,
    height: 35,
  },
  rotate: 0,
  data: {
    text: "Welcome to the end of days",
    fontFamily: 'Arial',
    fontSize: 20,
    fontColor: 'red',
    fontBold: true,
    fontItalic: true,
    fontStrikeThrough: true,
  },
}

const textCont1: TextContent = {
  type: "text",
  id: uuidv4(),
  position: {
    x: 200,
    y: 300,
  },
  size: {
    width: 25,
    height: 35,
  },
  rotate: 0,
  data: {
    text: "Welcome to the end of eras",
    fontFamily: 'Arial',
    fontSize: 20,
    fontColor: 'red',
    fontBold: true,
    fontItalic: true,
    fontStrikeThrough: true,
  },
}

const backLandscape: BackColor = {
  type: "color",
  color: "pink",
}

const backLandscape2: BackImage = {
  type: "image",
  imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const circle1: Primitive = {
  type: "primitive",
  id: uuidv4(),
  position: {
    x: 0,
    y: 100,
  },
  size: {
    height: 35,
    width: 35,
  },
  rotate: 0,
  data: {
    form: "Ellipse",
    borderColor: "blue",
  },
}

const triangle1: Primitive = {
  type: "primitive",
  id: uuidv4(),
  position: {
    x: 0,
    y: 200,
  },
  size: {
    height: 35,
    width: 35,
  },
  rotate: 0,
  data: {
    form: "Triangle",
    borderColor: "blue",
  },
}

const rectangle1: Primitive = {
  type: "primitive",
  id: uuidv4(),
  position: {
    x: 0,
    y: 300,
  },
  size: {
    height: 35,
    width: 35,
  },
  rotate: 0,
  data: {
    form: "Rectangle",
    borderColor: "blue",
  },
}

const slides1: Slide = {
  id: uuidv4(),
  background: backLandscape,
  objects: [myLovelyImage, textCont, circle1, rectangle1, triangle1, textCont1],
}

const slides2: Slide = {
  id: uuidv4(),
  background: backLandscape2,
  objects: [textCont, circle1, textCont1],
}

const myPresentation: Presentation = {
  name: "myPresent",
  presentationSlides: [slides1, slides2, slides1, slides1, slides1],
  objectsSelection: [],
  currentSlide: slides1.id,
  selectSlides: [slides1.id, slides2.id]
}
// const editorData: Editor = {
//   editorPresentation: myPresentation,
// }

export {myPresentation};