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

// type AllowedFonts = "Arial" | "Times New Roman" | "Verdana";
type AllowedFonts = string;

type TextContent = SlideDatas & {
  type: "text";
  data: {
    text: string
    fontFamily: AllowedFonts;
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
    form: "Triangle" | "Ellipse" | "Rectangle";
    borderColor: string;
    borderBold: number;
    fillColor: string;
  };
};

type SlideDatas = {
  id: string;
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

type MenuElement = {
  id: string;
  text: string;
  shortcut?: string;
};

type Menu = {
  menuElements: MenuElement[];
};

type Operation = {
  data: object;
  idOperation: string;
};

type OperHistory = {
  allOperation: Array<Operation>;
  prevOperation: Array<Operation>;
};

type Option = {
  id: string;
  value: number | string;
  label: string;
};

type Slide = {
  idSlide: string;
  background: BackColor | BackImage;
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
  // history: OperHistory;
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
  AllowedFonts,
  MenuElement,
  Menu,
  Operation,
  OperHistory,
  Option,
  Slide,
  Presentation,
  Editor,
};
