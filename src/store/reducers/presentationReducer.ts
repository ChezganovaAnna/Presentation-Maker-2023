import {
    AllowedFonts,
    BackColor,
    Position,
    Presentation,
    Size,
    Slide,
    Slide as TSlide,
    TextContent
} from "../../types/types";
import {
    CREATE_SLIDE,
    DELETE_SLIDE,
    PresentationActionTypes,
    SET_PRESENTATION_NAME
} from "../actions/presentationActions";
import {
    ADD_ITEM_TEXT,
    SlideActionTypes
} from "../actions/slideActions";
import {v4 as uuidv4} from "uuid";


const fontFamily: AllowedFonts = "verdana";

const size: Size = {
    height: 100,
    width: 300,
};


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

const slides1: Slide = {
    id: uuidv4(),
    background: backLandscape,
    objects: [textCont1],
    selectObjects: [],
    selected: true,
}


const initialPresentationState: Presentation = {
    presentationSlides: [slides1],
    name: '',
    currentSlide: slides1.id,
    selectSlides: []
};

const presentationReducer = (state = initialPresentationState, action: PresentationActionTypes | SlideActionTypes): Presentation => {
    switch (action.type) {
        //эта же штука еще не работает
        case SET_PRESENTATION_NAME:
            return {
                ...state,
                name: action.payload
            };
        case CREATE_SLIDE:
            const newSlide: TSlide = {
                id: uuidv4(),
                background: { type: "color", color: "white" },
                objects: [],
                selectObjects: [],
                selected: false,
            };
            return {
                ...state,
                presentationSlides: [
                    ...state.presentationSlides,
                    newSlide
                ]
            };
        case DELETE_SLIDE:
            return {
                ...state,
                presentationSlides: state.presentationSlides.filter(slide => slide.id !== action.payload),
            };



            ///////////////////////////здесь я была

        case ADD_ITEM_TEXT:
            const newTextBlock: TextContent = {
                id: uuidv4(),
                position: {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2,
                },
                size: {
                    width: 100,
                    height: 100,
                },
                rotate: 0,
                selected: true,
                type: "text",
                data: {
                    text: "enter your text",
                    fontFamily: "verdana",
                    fontSize: 14,
                    fontColor: "black",
                    fontBold: false,
                    fontItalica: false,
                    fontStrikeThrough: false,
                },
            };
            return {
                ...state,
                presentationSlides: [
                    ...state.presentationSlides,
                    {
                        id: uuidv4(),
                        background: { type: "color", color: "white" },
                        objects: [newTextBlock],
                        selectObjects: [],
                        selected: true,
                    }
                ]
            }


        // case SET_PRESENTATION_NAME:
        //     return {
        //         ...state,
        //         name: action.payload
        //     };
        // case SET_PRESENTATION_NAME:
        //     return {
        //         ...state,
        //         name: action.payload
        //     };
        // case SET_PRESENTATION_NAME:
        //     return {
        //         ...state,
        //         name: action.payload
        //     };
            //тест по физике +
            //остался еще один
            //а вообще прекрасные deleteSlide и createSlide
            //
            //создание всяких штук и удаление
            //текст надо (размер) обрабатывать
            //
        // case SET_PRESENTATION_NAME:
        //     return {
        //         ...state,
        //         name: action.payload
        //     };
        // case ADD_SLIDE_TO_PRESENTATION:
        //     return {
        //         ...state,
        //         presentationSlides: [...state.presentationSlides, action.payload]
        //     };
        // Handle other actions
        default:
            return state;
    }
};

export default presentationReducer