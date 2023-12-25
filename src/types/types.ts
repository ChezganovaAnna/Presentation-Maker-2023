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
    imageSrc: string;
    alt: string;
    size: Size;
  };
};

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
    // borderBold: number;
    // fillColor: string;
  };
};

type SlideDatas = {
  id: string;
  position: Position;
  size: Size;
  rotate?: number;
  selected: boolean;
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

type Slide = {
  id: string;
  background: BackColor | BackImage;
  objects: Array<TextContent | ImageContent | Primitive>;
  selectObjects: Array<TextContent | ImageContent | Primitive>;
  selected: boolean;
};

type Presentation = {
  presentationSlides: Array<Slide>;
  name: string;
  currentSlide: string | null;
  selectSlides: Array<Slide>;
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
  SlideDatas,
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