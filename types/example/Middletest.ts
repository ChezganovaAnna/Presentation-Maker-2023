import * as Type from "../types";
import {PrimitiveType} from "../types";

const myLovelyImage: Type.ImageContent = {
  id: "9",
  x: 65,
  y: 78,
  height: 154,
  width: 845,
  type: "image",
  imageType: "imagebase64",
  pathImage: "R0lGODlhBwAKAMIEAICAgJmZmbOzs/f39////////////////yH5BAEKAAcALAAAAAAHAAoAAAMWSDPUGoE5AaIj1M4qMW+ZFDYD1ClnAgA7",
};

const textCont: Type.TextContent = {
  id: "11",
  x: 85,
  y: 24,
  height: 202,
  width: 74,
  type: "text",
  text: "hello",
  fontFamily: "Arial",
  fontSize: 24,
  color: "black",
  bold: false,
  italic: false,
  strikeThrough: false,
  underline: false,
};

const backLandscape: Type.BackColor = {
  type: "color",
  color: "black",
};

const circle1: Type.Primitive = {
  id: "15",
  x: 745,
  y: 745,
  height: 96,
  width: 85,
  type: PrimitiveType.CIRCLE,
  borderColor: "blue",
  primitiveX: 74,
  primitiveY: 56,
  borderBold: 74,
  fillColor: "grey",
};

const triangle1: Type.Primitive = {
  id: "19",
  x: 145,
  y: 140,
  height: 100,
  width: 345,
  opacity: 84,
  rotate: 65,
  type: PrimitiveType.TRIANGLE,
  borderColor: "blue",
  primitiveX: 45,
  primitiveY: 45,
  borderBold: 46,
  fillColor: "grey",
};

const rectangle1: Type.Primitive = {
  id: "78",
  x: 50,
  y: 50,
  height: 62,
  width: 74,
  type: PrimitiveType.RECTANGLE,
  borderColor: "blue",
  primitiveX: 87,
  primitiveY: 54,
  borderBold: 54,
  fillColor: "grey",
};

const slides1: Type.Slide = {
  idSlide: "78",
  background: backLandscape,
  slideObject: [myLovelyImage, textCont, circle1, rectangle1, triangle1],
};

const myPresentation: Type.Presentation = {
  name: "myPresent",
  presentationSlides: [slides1],
};

const selectionInPresentation: Type.Selected = {
  selectedSlides: "78",
  selectedObjects: [],
};

const editor: Type.Editor = {
  editorPresentation: myPresentation,
  selection: selectionInPresentation,
};