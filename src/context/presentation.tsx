import React, { createContext, useState, PropsWithChildren } from "react";
import {
    AllowedFonts,
    BackColor,
    BackImage,
    Editor as TEditor,
    ImageContent, Presentation,
    Primitive,
    Size, Slide,
    TextContent
} from "../types/types";
import { v4 as uuidv4 } from "uuid";

type EditorContextType = {
    editor: TEditor;
    setEditor: (newEditor: TEditor) => void;
};

const fontFamily: AllowedFonts = "verdana";

const size: Size = {
    height: 100,
    width: 300,
};

const myLovelyImage: ImageContent = {
    type: "image",
    id: uuidv4(),
    position: {
        x: 100,
        y: 100,
    },
    size: size,
    opacity: 1,
    rotate: 50,
    data: {
        imageSrc: "imageLink",
        pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
        alt: "first-image",
    },
}


const textCont: TextContent = {
    type: "text",
    id: uuidv4(),
    position: {
        x: 100,
        y: 200,
    },
    size: size,
    opacity: 1,
    rotate: 0,
    data: {
        text: "Welcome to the end of days",
        fontFamily: fontFamily,
        fontSize: 20,
        fontColor: "red",
        fontBold: true,
        fontItalica: true,
        fontStrikeThrough: true,
    },
    underline: true,
}

const textCont1: TextContent = {
    type: "text",
    id: uuidv4(),
    position: {
        x: 200,
        y: 300,
    },
    size: size,
    opacity: 1,
    rotate: 0,
    data: {
        text:
          "Welcome to the end of eras " +
          "ice has melted back to life" +
          "done my time and serve my sentence",
        fontFamily: fontFamily,
        fontSize: 20,
        fontColor: "green",
        fontBold: false,
        fontItalica: false,
        fontStrikeThrough: false,
    },
    underline: false,
}

const backLandscape: BackColor = {
    type: "color",
    color: "pink",
}

const backLandscape2: BackImage = {
    type: "image",
    imageSrc: "imageLink",
    pathImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg/1280px-140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg",
}

const circle1: Primitive = {
    type: "primitive",
    id: uuidv4(),
    position: {
        x: 3,
        y: 3,
    },
    size: {
        height: 15,
        width: 15,
    },
    opacity: 3,
    rotate: 3,
    data: {
        form: "Ellipse",
        borderColor: "blue",
        borderBold: 3,
        fillColor: "grey",
    },
}

const triangle1: Primitive = {
    type: "primitive",
    id: uuidv4(),
    position: {
        x: 4,
        y: 4,
    },
    size: {
        height: 15,
        width: 15,
    },
    opacity: 4,
    rotate: 4,
    data: {
        form: "Triangle",
        borderColor: "blue",
        borderBold: 4,
        fillColor: "grey",
    },
}

const rectangle1: Primitive = {
    type: "primitive",
    id: uuidv4(),
    position: {
        x: 5,
        y: 5,
    },
    size: {
        height: 15,
        width: 15,
    },
    opacity: 5,
    rotate: 5,
    data: {
        form: "Rectangle",
        borderColor: "blue",
        borderBold: 5,
        fillColor: "grey",
    },
}

const slides1: Slide = {
    idSlide: uuidv4(),
    background: backLandscape,
    objects: [myLovelyImage, textCont, circle1, rectangle1, triangle1, textCont1],
    selectObjects: [rectangle1, triangle1],
}

const slides2: Slide = {
    idSlide: uuidv4(),
    background: backLandscape2,
    objects: [textCont, circle1, textCont1],
    selectObjects: [textCont, circle1],
}

export const EditorContext = createContext<EditorContextType>({
    editor: {
        editorPresentation: {
            name: "myPresent",
            presentationSlides: [slides2],
            currentSlide: slides2,
            selectSlides: [slides2],
        }
    },
    setEditor: () => {},
});
const myPresentation: Presentation = {
    name: "myPresent",
    presentationSlides: [slides2],
    currentSlide: slides2,
    selectSlides: [slides2],
}

function EditorProvider({ children }: PropsWithChildren) {
    const initialEditor: TEditor = {
        editorPresentation: myPresentation,
    };

    const [editor, setEditor] = useState<TEditor>(initialEditor);

    const handleSetEditor = (newEditor: TEditor) => {
        setEditor(newEditor);
    };

    return (
        <EditorContext.Provider
            value={{
                editor,
                setEditor: handleSetEditor,
            }}
        >
            {children}
        </EditorContext.Provider>
    );
}

export default EditorProvider;