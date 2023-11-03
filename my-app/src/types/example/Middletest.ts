import * as Type from "../../types/types"

//нет opacity и rotate
const myLovelyImage1: Type.ImageContent = {
  id: 1,
  x: 1,
  y: 1,
  height: 1,
  width: 1,
  type: "image",
  imageSrc: "imageLink",
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

//нет opacity
const myLovelyImage2: Type.ImageContent = {
  id: 6,
  x: 6,
  y: 6,
  height: 6,
  width: 6,
  rotate: 6,
  type: "image",
  imageSrc: "imageLink",
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

//нет rotate
const myLovelyImage3: Type.ImageContent = {
  id: 7,
  x: 7,
  y: 7,
  height: 7,
  width: 7,
  opacity: 0,
  type: "image",
  imageSrc: "imageLink",
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const textCont: Type.TextContent = {
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

const backLandscape: Type.BackColor = {
  type: "color",
  color: "black",
}

const backLandscape2: Type.BackImage = {
  type: "image",
  imageSrc: "imageLink",
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const slides1: Type.Slide = {
  idSlide: 1,
  background: {
    type: "image",
    imageSrc: "imageLink",
    pathImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
  },
  slideObject: [myLovelyImage1, textCont],
}

const myPresentation: Type.Presentation = {
  name: "myPresent",
  presentationSlides: [slides1],
  currentSlide: slides1,
}

const editor: Type.Editor = {
  //можно ли убрать тип выше
  editorPresentation: myPresentation,
  selection: {
    selectedSlides: [slides1.idSlide],
    selectedObjects: [textCont.id],
  },
}

export default editor;