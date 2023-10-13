"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var myLovelyImage = {
    id: "1",
    x: 85,
    y: 45,
    height: 158,
    width: 145,
    opacity: 50,
    rotate: 175,
    type: "image",
    imageType: "imageLink",
    pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
};
var textCont = {
    id: "2",
    x: 85,
    y: 24,
    height: 202,
    width: 74,
    opacity: 85,
    rotate: 90,
    type: "text",
    text: "2, 22, 222, 2222",
    fontFamily: "Arial",
    fontSize: 20,
    color: "black",
    bold: true,
    italic: true,
    strikeThrough: true,
    underline: true,
};
var backLandscape = {
    type: "color",
    color: "black",
};
//вопрос
var backLandscape2 = {
    type: "image",
    imageType: "imageLink",
    pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
};
var circle1 = {
    id: "3",
    x: 745,
    y: 745,
    height: 96,
    width: 85,
    opacity: 87,
    rotate: 45,
    type: types_1.PrimitiveType.CIRCLE,
    borderColor: "blue",
    primitiveX: 74,
    primitiveY: 56,
    borderBold: 74,
    fillColor: "grey",
};
var triangle1 = {
    id: "8",
    x: 95,
    y: 85,
    height: 85,
    width: 74,
    opacity: 74,
    rotate: 54,
    type: types_1.PrimitiveType.TRIANGLE,
    borderColor: "blue",
    primitiveX: 45,
    primitiveY: 45,
    borderBold: 46,
    fillColor: "grey",
};
var rectangle1 = {
    id: "4",
    x: 74,
    y: 54,
    height: 55,
    width: 56,
    opacity: 56,
    rotate: 55,
    type: types_1.PrimitiveType.RECTANGLE,
    borderColor: "blue",
    primitiveX: 544,
    primitiveY: 54,
    borderBold: 54,
    fillColor: "grey",
};
var slides1 = {
    idSlide: "5",
    background: backLandscape,
    slideObject: [myLovelyImage, textCont, circle1, rectangle1, triangle1],
};
var slides2 = {
    idSlide: "6",
    background: backLandscape2,
    slideObject: [textCont, circle1],
};
var myPresentation = {
    name: "myPresent",
    presentationSlides: [slides1, slides2],
};
var selectionInPresentation = {
    selectedSlides: "5",
    selectedObjects: ["1", "2"],
};
var editor = {
    editorPresentation: myPresentation,
    selection: selectionInPresentation,
};
