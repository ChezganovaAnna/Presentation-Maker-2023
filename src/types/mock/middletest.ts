import {
  Position,
  Size,
  ImageContent,
  TextContent,
  BackColor,
  BackImage,
  Slide,
  Presentation,
} from "../types";
import {v4 as uuidv4} from "uuid";

const position: Position = {
  x: 0,
  y: 100,
}

const size: Size = {
  height: 100,
  width: 300,
};

//нет rotate
const myLovelyImage1: ImageContent = {
  type: "image",
  id: uuidv4(),
  position: position,
  size: size,
  data: {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
    alt: "first-image",
    size: size,
  },
}

//нет rotate
const myLovelyImage3: ImageContent = {
  type: "image",
  id: uuidv4(),
  position: position,
  size: size,
  data: {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
    alt: "image",
    size: size,
  },
}

//нет rotate
const textCont: TextContent = {
  type: "text",
  id: uuidv4(),
  position: position,
  size: size,
  data: {
    text: "2, 22, 222, 2222",
    fontFamily: "Arial",
    fontSize: 20,
    fontColor: "black",
    fontBold: true,
    fontItalic: true,
    fontStrikeThrough: true,
  },
}

const backLandscape: BackColor = {
  type: "color",
  color: "black",
}

const backLandscape2: BackImage = {
  type: "image",
  imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const slides1: Slide = {
  id: uuidv4(),
  background: backLandscape,
  objects: [myLovelyImage1, textCont],
}

const slides2: Slide = {
  id: uuidv4(),
  background: backLandscape2,
  objects: [myLovelyImage3],
}

const myPresentation: Presentation = {
  name: "myPresent",
  presentationSlides: [slides1, slides2],
  currentSlide: slides1.id,
  selectSlides: [],
  objectsSelection: [],
}

export {myPresentation};