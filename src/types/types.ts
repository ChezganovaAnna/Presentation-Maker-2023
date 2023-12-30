type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type ImageContent = SlideElement & {
  type: "image";
  data: {
    imageSrc: string;
    alt: string;
    size: Size;
  };
};

type AllowedFonts = string;

type TextContent = SlideElement & {
  type: "text";
  data: {
    text: string
    fontFamily: AllowedFonts;
    fontSize: number;
    fontColor: string;
    fontBold: boolean;
    fontItalic: boolean;
    fontStrikeThrough: boolean;
    fontUnderline: boolean;
  };
};

type Primitive = SlideElement & {
  type: "primitive";
  data: {
    form: "Triangle" | "Ellipse" | "Rectangle";
    borderColor: string;
    // borderBold: number;
    // fillColor: string;
  };
};

type SlideElement = {
  id: string;
  position: Position;
  size: Size;
  rotate?: number;
  selected?: boolean;
};

type BackColor = {
  type: "color";
  color: string;
};

type BackImage = {
  type: "image";
  imageSrc: string;
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
  id: string;
  data: object;
};

type History = {
  allOperation: Array<Operation>;
  prevOperation: Array<Operation>;
};

type Option = {
  id: string;
  value: number | string;
  label: string;
};

export interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

type Slide = {
  id: string;
  background: BackColor | BackImage;
  objects: Array<TextContent | ImageContent | Primitive>;
};

type Presentation = {
  presentationSlides: Array<Slide>;
  name: string;
  objectsSelection: Array<string>;
  currentSlide: string | null;
  selectSlides: Array<string>;
};

// type Editor = {
//   editorPresentation: Presentation;
//   // history: OperHistory;
// };

export type {
  Position,
  Size,
  ImageContent,
  TextContent,
  Primitive,
  SlideElement,
  BackColor,
  BackImage,
  AllowedFonts,
  MenuElement,
  Menu,
  Operation,
  History,
  Option,
  Slide,
  Presentation,
  // Editor,
};