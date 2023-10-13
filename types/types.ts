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
  underline?: boolean;
};

type backColor = {
  color: string; //если узнаем, как делается градиент, то добавим
};

type backImage = {
  imageSrc: "imageLink" | "imagebase64";
  pathImage: string;
};

type primitive = slideDatas & {
  type: "Triangle" | "Circle" | "Rectangle";
  borderColor: string;
  primitiveX: number;
  primitiveY: number;
  borderBold: number;
  fillColor: string;
};

type operation = {
  data: object;
  idOperation: number;
  prevOperation: operation | null;
  nextOperation: operation | null;
};

type operHistory = {
  allOperation: operation;
};

type selected = {
  selectedSlides: Array<number>;
  selectedObjects: Array<number>;
};

type slide = {
  idSlide: number;
  background?: backColor | backImage;
  slideObject: Array<textContent | imageContent | primitive>;
};

type presentation = {
  name: string;
  presentationSlides: Array<slide>;
};

type editor = {
  editorPresentation: presentation;
  selection: selected;
};

export {
  imageContent,
  textContent,
  slideDatas,
  backColor,
  backImage,
  primitive,
  slide,
  selected,
  presentation,
  operHistory,
  editor,
};
