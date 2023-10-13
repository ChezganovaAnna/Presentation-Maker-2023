"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var myLovelyImage = {
    id: "1",
    x: 85,
    y: 45,
    height: 158,
    width: 145,
    type: "image",
    imageType: "imagebase64",
    pathImage: "R0lGODlhBwAKAMIEAICAgJmZmbOzs/f39////////////////yH5BAEKAAcALAAAAAAHAAoAAAMWSDPUGoE5AaIj1M4qMW+ZFDYD1ClnAgA7",
};
var textCont = {
    id: "2",
    x: 85,
    y: 24,
    height: 202,
    width: 74,
    type: "text",
    text: "2, 22, 222, 2222",
    fontFamily: "Arial",
    fontSize: 20,
    color: "black",
    bold: false,
    italic: false,
    strikeThrough: false,
    underline: false,
};
var backLandscape = {
    type: "color",
    color: "black",
};
var circle1 = {
    id: "3",
    x: 745,
    y: 745,
    height: 96,
    width: 85,
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
var myPresentation = {
    name: "myPresent",
    presentationSlides: [slides1],
};
var selectionInPresentation = {
    selectedSlides: "5",
    selectedObjects: [],
};
var editor = {
    editorPresentation: myPresentation,
    selection: selectionInPresentation,
};
