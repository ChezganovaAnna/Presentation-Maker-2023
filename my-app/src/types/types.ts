type ImageContent = SlideDatas & {
  type: 'image';
  imageSrc: 'imageLink' | 'imagebase64';
  pathImage: string;
};

type TextContent = SlideDatas & {
  type: 'text';
  text: string;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  fontBold: boolean;
  fontItalica: boolean;
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
  underline?: boolean;
};

type BackColor = {
  type: 'color';
  color: string; //если узнаем, как делается градиент, то добавим
};

type BackImage = {
  type: 'image';
  imageSrc: 'imageLink' | 'imagebase64';
  pathImage: string;
};

type Primitive = SlideDatas & {
  type: 'Triangle' | 'Circle' | 'Rectangle';
  borderColor: string;
  primitiveX: number;
  primitiveY: number;
  borderBold: number;
  fillColor: string;
};

type Operation = {
  data: object;
  idOperation: number;
  prevOperation: Operation | null;
  nextOperation: Operation | null;
};

type OperHistory = {
  allOperation: Operation;
};

type Selected = {
  selectedSlides: Array<number>;
  selectedObjects: Array<number>;
};

type Slide = {
  idSlide: number;
  background?: BackColor | BackImage;
  slideObject: Array<TextContent | ImageContent | Primitive>;
};

type Presentation = {
  name: string;
  presentationSlides: Array<Slide>;
  currentSlide: Slide;
};

type Editor = {
  editorPresentation: Presentation;
  selection: Selected;
};

export type {
  ImageContent,
  TextContent,
  SlideDatas,
  BackColor,
  BackImage,
  Primitive,
  Slide,
  Selected,
  Presentation,
  OperHistory,
  Editor,
};
