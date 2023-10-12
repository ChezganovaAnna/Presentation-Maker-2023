type ImageContent = SlideDatas & {
  type: "image";
  imageSrc: "imageLink" | "imagebase64";
  pathImage: string;
};

type TextContent = SlideDatas & {
  type: "text";
  text: Array<string>;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  fоntBold: boolean;
  fontItalica: boolean;
  underline: boolean;
  fontStrikeThrough: boolean;
};

type SlideDatas = {
  id: number;
  x: number;
  y: number;
  height: number;
  width: number;
  opacity?: number;
  rotate?: number; //можно крутить по разным осям
};

type BackColor = {
  color: string; //если узнаем, как делается градиент, то добавим
};

type BackImage = {
  imageSrc: "imageLink" | "imagebase64";
  pathImage: string;
};

enum borderType {
  solidLine = "sL",
  dottedLine = "dL",
  fineDottedLine = "fDL",
  waveUnderlining = "wU",
}

type Primitive = SlideDatas & {
  type: "Triangle" | "Circle" | "Rectangle";
  border: borderType;
  borderColor: string;
  borderSize: number;
  borderBold: number;
  fillColor: string;
};

type Slide = {
  id: number;
  background?: BackColor | BackImage;
  slideObject: Array<TextContent | ImageContent | Primitive>;
};

type Presentation = {
  name: string;
  slides: Array<Slide>;
};

type Operation = {
  id: number;
  type: "";
  prev: Operation | null;
  next: Operation | null;
};

type OperHistory = {};

type Selected = {
  slides: Array<number>;
  objects: Array<number>;
};

type Editor = {
  presentation: Presentation;
  selection: Selected;
};

export {
  ImageContent,
  TextContent,
  SlideDatas,
  BackColor,
  BackImage,
  Primitive,
  Slide,
  Presentation,
  OperHistory,
  Editor,
};
