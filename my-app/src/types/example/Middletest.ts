import {
  ImageContent,
  TextContent,
  BackColor,
  BackImage,
  Slide,
  Presentation,
  Editor,
} from "../types";

//нет opacity и rotate
const myLovelyImage1: ImageContent = {
  type: "image",
  id: 1,
  position: {
    x: 1,
    y: 1,
  },
  size: {
    height: 1,
    width: 1,
  },
  data: {
    imageSrc: "imageLink",
    pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
    alt: "first-image",
  },
}

//нет opacity
const myLovelyImage2: ImageContent = {
  type: "image",
  id: 2,
  position: {
    x: 2,
    y: 2,
  },
  size: {
    height: 2,
    width: 2,
  },
  rotate: 2,
  data: {
    imageSrc: "imageLink",
    pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
    alt: "second-image",
  },
}

//нет rotate
const myLovelyImage3: ImageContent = {
  type: "image",
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
  data: {
    imageSrc: "imageLink",
    pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
    alt: "image",
  },
}

//нет opacity и rotate
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
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const slides1: Slide = {
  idSlide: 1,
  background: backLandscape,
  objects: [myLovelyImage1, textCont],
  selectObjects: [myLovelyImage1],
}

const slides2: Slide = {
  idSlide: 1,
  background: backLandscape2,
  objects: [myLovelyImage2],
  selectObjects: [myLovelyImage2, myLovelyImage3],
}

const myPresentation: Presentation = {
  name: "myPresent",
  presentationSlides: [slides1, slides2],
  currentSlide: slides1,
  selectSlides: [slides1],
}

const editor: Editor = {
  editorPresentation: myPresentation,
}
export {editor};