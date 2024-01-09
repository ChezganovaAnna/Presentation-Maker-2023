import {Presentation, Slide as TSlide} from "../../types/types";
import {
    ADD_ITEM,
    ADD_ITEM_PRIMITIVE,
    ADD_ITEM_TEXT,
    CHANGE_FONT_FAMILY,
    CREATE_SLIDE,
    DECREASE_FONT_SIZE,
    DELETE_SLIDE,
    EDIT_TEXT_ITEM,
    INCREASE_FONT_SIZE,
    MOVE_OBJECT,
    PresentationActionTypes,
    REMOVE_ITEM,
    SELECT_SLIDE,
    SET_BACKGROUND,
    SET_FONT_BOLD,
    SET_FONT_COLOR,
    SET_FONT_ITALIC,
    SET_FONT_SIZE,
    SET_FONT_STRIKETHROUGH,
    SET_FONT_UNDERLINED,
    SET_OBJECT_SELECTION,
    SET_PRESENTATION_NAME
} from "../actions/presentationActions";
import {v4 as uuidv4} from "uuid";


const initialPresentationState: Presentation = {
    presentationSlides: [],
    name: '',
    currentSlide: null,
    selectSlides: [],
    objectsSelection: []
};

const presentationReducer = (state = initialPresentationState, action: PresentationActionTypes): Presentation => {
    switch (action.type) {
        case SET_PRESENTATION_NAME:
            return {
                ...state,
                name: action.payload
            };
        case SELECT_SLIDE:
            return {
                ...state,
                currentSlide: action.payload
            };
        case CREATE_SLIDE:
            const newSlide: TSlide = {
                id: uuidv4(),
                background: {type: "color", color: "white"},
                objects: []
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
        case ADD_ITEM:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id !== state.currentSlide)
                        return slide
                    return {
                        ...slide,
                        objects: [...slide.objects,
                            {
                                id: uuidv4(),
                                position: {
                                    x: 123,
                                    y: 123
                                },
                                size: {width: 100, height: 100},
                                type: "text",
                                data: {
                                    text: action.payload,
                                    fontFamily: "verdana",
                                    fontSize: 20,
                                    fontColor: "#000000",
                                    fontBold: false,
                                    fontItalic: false,
                                    fontStrikeThrough: false,
                                }
                            }
                        ]
                    }
                }),
            };
        case ADD_ITEM_TEXT:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id !== state.currentSlide)
                        return slide
                    return {
                        ...slide,
                        objects: [...slide.objects,
                            {
                                id: uuidv4(),
                                position: {
                                    x: 123,
                                    y: 123
                                },
                                size: {width: 100, height: 100},
                                type: "text",
                                data: {
                                    text: action.payload,
                                    fontFamily: "verdana",
                                    fontSize: 20,
                                    fontColor: "#000000",
                                    fontBold: false,
                                    fontItalic: false,
                                    fontStrikeThrough: false,
                                    fontUnderline: false
                                }
                            }
                        ]
                    }
                }),
            };
        case ADD_ITEM_PRIMITIVE:
            const newPrimitive: Primitive = {
                id: uuidv4(),
                position: {
                    x: 123,
                    y: 123
                },
                size: { width: 100, height: 100 },
                type: "primitive",
                data: {
                    form: action.payload,
                    borderColor: "#000000"
                }
            };
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id !== state.currentSlide) {
                        return slide;
                    }
                    return {
                        ...slide,
                        objects: [...slide.objects, newPrimitive]
                    };
                })
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id !== state.currentSlide) {
                        return slide;
                    }
                    return {
                        ...slide,
                        objects: slide.objects.filter(obj => obj.id !== action.payload)
                    };
                })
            };
        case MOVE_OBJECT:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id !== state.currentSlide)
                        return slide
                    return {
                        ...slide,
                        objects: slide.objects.map(object => {
                            if (!state.objectsSelection.includes(object.id))
                                return object
                            return {
                                ...object,
                                position: {
                                    x: object.position.x + action.payload.x,
                                    y: object.position.y + action.payload.y
                                }
                            }
                        })
                    }
                }),
            };
        case SET_OBJECT_SELECTION:
            return {
                ...state,
                objectsSelection: action.payload
            }
        case SET_BACKGROUND:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => ({
                    ...slide,
                    background: action.payload,
                })),
            }
        case CHANGE_FONT_FAMILY:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id === state.currentSlide) {
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                if (object.type === "text") {
                                    return {
                                        ...object,
                                        data: {
                                            ...object.data,
                                            fontFamily: action.payload
                                        }
                                    };
                                }
                                return object;
                            })
                        };
                    }
                    return slide;
                })
            }
        case INCREASE_FONT_SIZE:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id === state.currentSlide) {
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                if (object.type === "text") {
                                    return {
                                        ...object,
                                        data: {
                                            ...object.data,
                                            fontSize: object.data.fontSize + action.payload
                                        }
                                    };
                                }
                                return object;
                            })
                        };
                    }
                    return slide;
                })
            }
        case DECREASE_FONT_SIZE:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id === state.currentSlide) {
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                if (object.type === "text") {
                                    return {
                                        ...object,
                                        data: {
                                            ...object.data,
                                            fontSize: object.data.fontSize - action.payload
                                        }
                                    };
                                }
                                return object;
                            })
                        };
                    }
                    return slide;
                })
            }
        case SET_FONT_SIZE:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id === state.currentSlide) {
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                if (object.type === "text") {
                                    return {
                                        ...object,
                                        data: {
                                            ...object.data,
                                            fontSize: action.payload
                                        }
                                    };
                                }
                                return object;
                            })
                        };
                    }
                    return slide;
                })
            }
        case SET_FONT_BOLD:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id === state.currentSlide) {
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                if (object.type === "text") {
                                    return {
                                        ...object,
                                        data: {
                                            ...object.data,
                                            fontBold: action.payload
                                        }
                                    };
                                }
                                return object;
                            })
                        };
                    }
                    return slide;
                })
            }
        case SET_FONT_ITALIC:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id === state.currentSlide) {
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                if (object.type === "text") {
                                    return {
                                        ...object,
                                        data: {
                                            ...object.data,
                                            fontItalic: action.payload
                                        }
                                    };
                                }
                                return object;
                            })
                        };
                    }
                    return slide;
                })
            }
        case SET_FONT_UNDERLINED:
            return {
                ...state,
                presentationSlides: state.presentationSlides.map(slide => {
                    if (slide.id === state.currentSlide) {
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                if (object.type === "text") {
                                    return {
                                        ...object,
                                        data: {
                                            ...object.data,
                                            fontUnderline: action.payload
                                        }
                                    };
                                }
                                return object;
                            })
                        };
                    }
                    return slide;
                })
            }
            case SET_FONT_STRIKETHROUGH:
                return {
                    ...state,
                    presentationSlides: state.presentationSlides.map(slide => {
                        if (slide.id === state.currentSlide) {
                            return {
                                ...slide,
                                objects: slide.objects.map(object => {
                                    if (object.type === "text") {
                                        return {
                                            ...object,
                                            data: {
                                                ...object.data,
                                                fontStrikeThrough: action.payload
                                            }
                                        };
                                    }
                                    return object;
                                })
                            };
                        }
                        return slide;
                    })
                }
            case SET_FONT_COLOR:
                return {
                    ...state,
                    presentationSlides: state.presentationSlides.map(slide => {
                        if (slide.id === state.currentSlide) {
                            return {
                                ...slide,
                                objects: slide.objects.map(object => {
                                    if (object.type === "text") {
                                        return {
                                            ...object,
                                            data: {
                                                ...object.data,
                                                fontColor: action.payload
                                            }
                                        };
                                    }
                                    return object;
                                })
                            };
                        }
                        return slide;
                    })
                }
            case EDIT_TEXT_ITEM:
                return {
                    ...state,
                    presentationSlides: state.presentationSlides.map(slide => {
                        if (slide.id !== state.currentSlide)
                            return slide
                        return {
                            ...slide,
                            objects: [...slide.objects,
                                {
                                    id: uuidv4(),
                                    position: {
                                        x: 123,
                                        y: 123
                                    },
                                    size: {width: 100, height: 100},
                                    type: "text",
                                    data: {
                                        text: action.payload,
                                        fontFamily: "verdana",
                                        fontSize: 20,
                                        fontColor: "#000000",
                                        fontBold: false,
                                        fontItalic: false,
                                        fontStrikeThrough: false,
                                        fontUnderline: false
                                    }
                                }
                            ]
                        }
                    }),
                };
            case MOVE_OBJECT:
                return {
                    ...state,
                    presentationSlides: state.presentationSlides.map(slide => {
                        if (slide.id !== state.currentSlide)
                            return slide
                        console.log("HEY BRO NICE DICK", slide)
                        return {
                            ...slide,
                            objects: slide.objects.map(object => {
                                console.log("HEY BRO NICE DICK", state.objectsSelection, object.id)
                                if (!state.objectsSelection.includes(object.id))
                                    return object
                                return {
                                    ...object,
                                    position: {
                                        x: object.position.x + action.payload.x,
                                        y: object.position.y + action.payload.y
                                    }
                                }
                            })
                        }
                    }),
                };
            case SET_OBJECT_SELECTION:
                return {
                    ...state,
                    objectsSelection: action.payload
                }
            case SET_BACKGROUND:
                return {
                    ...state,
                    presentationSlides: state.presentationSlides.map(slide => ({
                        ...slide,
                        background: action.payload,
                    })),
                };

            //создание всяких штук и удаление +
            //текст надо (размер) обрабатывать +

            default:
                return state;
        }
    };

    export default presentationReducer