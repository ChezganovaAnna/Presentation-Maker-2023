type imageContent = slideDatas & {
  type: "image";
  imageSrc: "imageLink" | "imagebase64";
  pathImage: string;
};

type textContent = slideDatas & {
  type: "text";
  text: Array<string>;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  fontBold: boolean;
  fontItalica: boolean;
  underline: boolean;
  fontStrikeThrough: boolean;
};

type slideDatas = {
  id: number;
  x: number;
  y: number;
  height: number;
  width: number;
  opacity?: number;
  rotate?: number; //можно крутить по разным осям
};

type backColor = {
  color: string; //если узнаем, как делается градиент, то добавим
};

type backImage = {
  imageSrc: "imageLink" | "imagebase64";
  pathImage: string;
};

enum borderType {
  solidLine = "sL",
  dottedLine = "dL",
  fineDottedLine = "fDL",
  waveUnderlining = "wU",
}

type primitive = slideDatas & {
  type: "Triangle" | "Circle" | "Rectangle";
  border: borderType;
  borderColor: string;
  borderSize: number;
  borderBold: number;
  fillColor: string;
};

type slide = {
  id: number;
  background?: backColor | backImage;
  slideObject: Array<textContent | imageContent | primitive>;
};

type presentation = {
  name: string;
  presentationSlides: Array<slide>;
};

type operation = {
  id: number;
  type: object;
  prev: operation | null;
  next: operation | null;
};

type operHistory = {
  allOperation: operation;
  id: number;
};

type selected = {
  selectedSlides: Array<number>;
  objects: Array<number>;
};

type editor = {
  ePresentation: presentation;
  selection: selected;
};

export {
  imageContent,
  textContent,
  slideDatas,
  backColor,
  backImage,
  borderType,
  primitive,
  slide,
  presentation,
  operHistory,
  selected,
  editor,
};
