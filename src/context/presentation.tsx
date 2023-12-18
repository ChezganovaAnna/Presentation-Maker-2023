import { PropsWithChildren, createContext, useState } from "react";
import { Presentation } from "../types/types";
import {
    AllowedFonts,
    BackColor,
    BackImage,
    ImageContent,
    Primitive,
    Size, Slide,
    TextContent
} from "../types/types";
import { v4 as uuidv4 } from "uuid";

type PresentationContextType = {
    presentation: Presentation;
    setPresentation: (newPresentation: Presentation) => void;
};

const fontFamily: AllowedFonts = "verdana";

const size: Size = {
    height: 100,
    width: 300,
};

const myLovelyImage: ImageContent = {
    selected: false,
    type: "image",
    id: uuidv4(),
    position: {
        x: 100,
        y: 100,
    },
    size: size,
    rotate: 50,
    data: {
        imageSrc: "imageLink",
        alt: "first-image",
        size: size
    },
}


const textCont: TextContent = {
    selected: false,
    type: "text",
    id: uuidv4(),
    position: {
        x: 400,
        y: 200,
    },
    size: size,
    rotate: 0,
    data: {
        text: "Welcome to the end of days",
        fontFamily: fontFamily,
        fontSize: 20,
        fontColor: "red",
        fontBold: true,
        fontItalica: true,
        fontStrikeThrough: true,
    }
}

const textCont1: TextContent = {
    selected: false,
    type: "text",
    id: uuidv4(),
    position: {
        x: 200,
        y: 300,
    },
    size: size,
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
    }
}

const backLandscape: BackColor = {
    type: "color",
    color: "pink",
}

const backLandscape2: BackImage = {
    type: "image",
    imageSrc: "https://img.freepik.com/premium-photo/lightning-storm-in-the-sky_303714-4706.jpg",
}

const circle1: Primitive = {
    selected: false,
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
    rotate: 3,
    data: {
        form: "Ellipse",
        borderColor: "blue"
    },
}

const triangle1: Primitive = {
    selected: false,
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
    rotate: 4,
    data: {
        form: "Triangle",
        borderColor: "blue"
    },
}

const rectangle1: Primitive = {
    selected: false,
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
    rotate: 5,
    data: {
        form: "Rectangle",
        borderColor: "blue"
    },
}
const slides1: Slide = {
    id: uuidv4(),
    background: backLandscape,
    objects: [myLovelyImage, textCont, circle1, rectangle1, triangle1, textCont1],
    selectObjects: [rectangle1, triangle1],
    selected: false,
}

const slides2: Slide = {
    id: uuidv4(),
    background: backLandscape2,
    objects: [textCont, circle1, textCont1],
    selectObjects: [textCont, circle1],
    selected: true
}
export const PresentationContext = createContext<PresentationContextType>({
    presentation: {
        name: "My Presentation",
        presentationSlides: [slides2],
        currentSlide: slides2,
        selectSlides: [slides2],
    },
    setPresentation: () => {},
});

function PresentationProvider({ children }: PropsWithChildren) {
    const [presentation, setPresentation] = useState<Presentation>({
        name: "MyPresent",
        presentationSlides: [slides1, slides2],
        currentSlide: slides2,
        selectSlides: [slides2],
    });

    const handleSetPresentation = (newPresentation: Presentation) => {
        setPresentation({ ...newPresentation });
    };

    return (
      <PresentationContext.Provider
        value={{
            presentation,
            setPresentation: handleSetPresentation,
        }}
        children={children}
      />
    );
}

export default PresentationProvider;