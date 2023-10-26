"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
//нет opacity и rotate
var myLovelyImage1 = {
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
var myLovelyImage2 = {
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
var myLovelyImage3 = {
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
var slides1 = {
  id: 1,
  background: {
    imageSrc: "imageLink",
    pathImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
  },
  slideObject: [myLovelyImage1, textCont],
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
