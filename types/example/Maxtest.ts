import * as Type from "../types";
import {PrimitiveType} from "../types";
import {v4 as uuidv4} from "uuid";
import * as React from 'React'

const MyComponentsTestData: MyComponentProps[] = [
  {
    text: 'testComponent1',
    color: 'red',
    x: 10,
    y: 10,
  },
  {
    text: 'testComponent1',
    color: 'red',
    x: 10,
    y: 10m
  },
  {
    text: 'testComponent1',
    color: 'red',
    x: 10,
    y: 10m
  },
  {
    text: 'testComponent1',
    color: 'red',
    x: 10,
    y: 10m
  },
  {
    text: 'testComponent1',
    color: 'red',
    x: 10,
    y: 10m
  },
]

function MyPage() {

  return (
    <div>
      {
        MyComponentsTestData.map((item, index) => {

          return (
            <MyComponent
              key={index}
              text={item.text}
              color={item.color}
              x={item.x}
              y={item.y}
            />
          )
        })
      }  
    </div>
  )
}

type MyComponentProps = {
  className?: string,
  text: string,
  color: string,
  x: number,
  y: number,
  onClick?: () => void,
  onEdit?: (value: string) => void
}

function MyComponent(props: MyComponentProps) {
  const {
    className = '',
    onClick: () => {},
    onEdit: (value) => {},
  } = props
  
  return (
    <div
      className={className + ' my-component-class'}
    >
      <Button onClick={onClick}> </Button>
      <TextField
        onInput={onEdit}           
      > </TextField>
    </div>
  )
}

const myLovelyImage: Type.ImageContent = {
  id: "1",
  x: 85,
  y: 45,
  height: 158,
  width: 145,
  opacity: 50,
  rotate: 175,
  type: "image",
  imageType: "imageLink",
  pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
};

const textCont: Type.TextContent = {
  id: "2",
  x: 85,
  y: 24,
  height: 202,
  width: 74,
  opacity: 85,
  rotate: 90,
  type: "text",
  text: "2, 22, 222, 2222",
  fontFamily: "Arial",
  fontSize: 20,
  color: "black",
  bold: true,
  italic: true,
  strikeThrough: true,
  underline: true,
};

const backLandscape: Type.BackColor = {
  type: "color",
  color: "black",
  pathImage: "R0lGODlhBwAKAMIEAICAgJmZmbOzs/f39////////////////yH5BAEKAAcALAAAAAAHAAoAAAMWSDPUGoE5AaIj1M4qMW+ZFDYD1ClnAgA7",
};
//вопрос
const backLandscape2: Type.BackImage = {
  type: "image",
  imageType: "imageLink",
  pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
};

const circle1: Type.Primitive = {
  id: "3",
  x: 745,
  y: 745,
  height: 96,
  width: 85,
  opacity: 87,
  rotate: 45,
  type: PrimitiveType.CIRCLE,
  borderColor: "blue",
  primitiveX: 74,
  primitiveY: 56,
  borderBold: 74,
  fillColor: "grey",
};

const triangle1: Type.Primitive = {
  id: "8",
  x: 95,
  y: 85,
  height: 85,
  width: 74,
  opacity: 74,
  rotate: 54,
  type: PrimitiveType.TRIANGLE,
  borderColor: "blue",
  primitiveX: 45,
  primitiveY: 45,
  borderBold: 46,
  fillColor: "grey",
};

const rectangle1: Type.Primitive = {
  id: "4",
  x: 74,
  y: 54,
  height: 55,
  width: 56,
  opacity: 56,
  rotate: 55,
  type: PrimitiveType.RECTANGLE,
  borderColor: "blue",
  primitiveX: 544,
  primitiveY: 54,
  borderBold: 54,
  fillColor: "grey",
};

const slides1: Type.Slide = {
  idSlide: "5",
  background: backLandscape,
  slideObject: [myLovelyImage, textCont, circle1, rectangle1, triangle1],
};


const slides2: Type.Slide = {
  idSlide: "6",
  background: backLandscape2,
  slideObject: [textCont, circle1],
};

const myPresentation: Type.Presentation = {
  name: "myPresent",
  presentationSlides: [slides1, slides2],
};

const selectionInPresentation: Type.Selected = {
  selectedSlides: "5",
  selectedObjects: ["1", "2"],
};

const editor: Type.Editor = {
  editorPresentation: myPresentation,
  selection: selectionInPresentation,
};
