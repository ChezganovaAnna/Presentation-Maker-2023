//все типы с заглавной буквы ++
// ImageType вместо imageSrc ++
//font - убрать ++
// Italic instead og italica ++
//underline in TextContent ++
// type: "Triangle@" ++
//selectedslide uid//поле тип картинка или цвет в BackImage


type ImageContent = BaseElementType & {
  type: "image";
  imageType: "imageLink" | "imagebase64";
  pathImage: string;
};

type TextContent = BaseElementType & {
  type: "text";
  text: string;
  fontFamily: string;
  fontSize: number;
  color: string; //убрали font
  bold: boolean;
  italic: boolean;
  strikeThrough: boolean;
  underline: boolean;
};

type BaseElementType = {
  id: string;
  x: number;
  y: number;
  height: number;
  width: number;
  opacity?: number;
  rotate?: number; //можно крутить по разным осям
};

type BackColor = {
  type: "color";
  color: string; //если узнаем, как делается градиент, то добавим
  pathImage: string;
};

type BackImage = {
  type: "image";
  imageType: "imageLink" | "imagebase64";
  pathImage: string;
};



enum PrimitiveType {
  TRIANGLE = "Triangle",
  CIRCLE = "Circle",
  RECTANGLE = "Rectangle"
}

type Primitive = BaseElementType & {
  type: PrimitiveType;
  borderColor: string;
  primitiveX: number;
  primitiveY: number;
  borderBold: number;
  fillColor: string;
};

type Operation = {
  data: object;
  idOperation: string;
  prevOperation: Operation | null;
  nextOperation: Operation | null;
};

type OperHistory = {
  allOperation: Operation;
};

type Selected = {
  selectedSlides: string;
  selectedObjects: Array<string>;
};

type Slide = {
  idSlide: string;
  background: BackImage|BackColor;
  slideObject: Array<TextContent | ImageContent | Primitive>;
};

type Presentation = {
  name: string;
  presentationSlides: Array<Slide>;
};

type Editor = {
  editorPresentation: Presentation;
  selection: Selected;
};

export {
  ImageContent,
  TextContent,
  BaseElementType,
  BackColor,
  BackImage,
  PrimitiveType,
  Primitive,
  Slide,
  Selected,
  Presentation,
  OperHistory,
  Editor,
};
