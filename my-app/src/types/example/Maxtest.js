"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var myLovelyImage = {
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
var textCont = {
  id: 2,
  x: 2,
  y: 2,
  height: 2,
  width: 2,
  opacity: 2,
  rotate: 2,
  type: "text",
  text: ["2, 22, 222, 2222"],
  fontFamily: "Arial",
  fontSize: 20,
  fontColor: "black",
  fоntBold: true,
  fontItalica: true,
  underline: true,
  fontStrikeThrough: true,
}
var backLandscape = {
  color: "black",
}
var backLandscape2 = {
  imageSrc: "imageLink",
  pathImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}
var circle1 = {
  id: 3,
  x: 3,
  y: 3,
  height: 3,
  width: 3,
  opacity: 3,
  rotate: 3,
  type: "Circle",
  border: dL,
  borderColor: "blue",
  borderSize: 3,
  borderBold: 3,
  fillColor: "grey",
}
var triangle1 = {
  id: 4,
  x: 4,
  y: 4,
  height: 4,
  width: 4,
  opacity: 4,
  rotate: 4,
  type: "Triangle",
  border: fDL,
  borderColor: "blue",
  borderSize: 4,
  borderBold: 4,
  fillColor: "grey",
}
var rectangle1 = {
  id: 5,
  x: 5,
  y: 5,
  height: 5,
  width: 5,
  opacity: 5,
  rotate: 5,
  type: "Rectangle",
  border: sL,
  borderColor: "blue",
  borderSize: 5,
  borderBold: 5,
  fillColor: "grey",
}
var slides1 = {
  id: 1,
  background: {
    imageSrc: "imageLink",
    pathImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
  },
  slideObject: [myLovelyImage, textCont, circle1, rectangle1, triangle1],
}
var myPresentation = {
  name: "myPresent",
  slides: [slides1],
}
var editor = {
  presentation: myPresentation,
  selection: {
    slides: [1],
    objects: [1, 2, 3, 4, 5],
  },
}
