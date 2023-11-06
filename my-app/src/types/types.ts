type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type ImageContent = SlideDatas & {
  type: "image";
  data: {
    imageSrc: "imageLink" | "imagebase64";
    pathImage: string;
    alt: string;
  };
};

type TextContent = SlideDatas & {
  type: "text";
  data: {
    text: string
    fontFamily: string;
    fontSize: number;
    fontColor: string;
    fontBold: boolean;
    fontItalica: boolean;
    fontStrikeThrough: boolean;
  };
};

type Primitive = SlideDatas & {
  type: "primitive";
  data: {
    form: "Triangle" | "Circle" | "Rectangle";
    borderColor: string;
    borderBold: number;
    fillColor: string;
  };
};

type SlideDatas = {
  id: number;
  position: Position;
  size: Size;
  opacity?: number;
  rotate?: number; //можно крутить по разным осям
  underline?: boolean;
};

type BackColor = {
  type: "color";
  color: string; //если узнаем, как делается градиент, то добавим
};

type BackImage = {
  type: "image";
  imageSrc: "imageLink" | "imagebase64";
  pathImage: string;
};

type Operation = {
  data: object;
  idOperation: number;
};

type OperHistory = {
  allOperation: Array<Operation>;
  curOperation: Operation | null; //тут, наверное, NULL надо убрать тоже
  prevOperation: Array<Operation>;
};

type Slide = {
  idSlide: number;
  background?: BackColor | BackImage;
  objects: Array<TextContent | ImageContent | Primitive>;
  selectObjects: Array<TextContent | ImageContent | Primitive>;
};

type Presentation = {
  name: string;
  presentationSlides: Array<Slide>;
  currentSlide: Slide | null;
  selectSlides: Array<Slide>;
};

type Editor = {
  editorPresentation: Presentation;
};

export type {
  Position,
  Size,
  ImageContent,
  TextContent,
  Primitive,
  SlideDatas,
  BackColor,
  BackImage,
  Operation,
  OperHistory,
  Slide,
  Presentation,
  Editor,
};
