import {
    ADD_ITEM_PRIMITIVE,
    ADD_ITEM_TEXT,
    AddItemPrimitiveAction,
    AddItemTextAction,
    CHANGE_FONT_FAMILY,
    changeFontFamilyAction,
    CREATE_SLIDE,
    CreateSlideAction,
    DECREASE_FONT_SIZE,
    decreaseFontSizeAction,
    DELETE_SLIDE,
    DeleteSlideAction,
    INCREASE_FONT_SIZE,
    increaseFontSizeAction,
    MOVE_OBJECT,
    MoveObjectAction,
    REMOVE_ITEM,
    RemoveItemAction,
    SELECT_SLIDE,
    SelectSlideAction,
    SET_BACKGROUND,
    SET_FONT_BOLD,
    SET_FONT_COLOR,
    SET_FONT_ITALIC,
    SET_FONT_SIZE,
    SET_FONT_STRIKETHROUGH,
    SET_FONT_UNDERLINED,
    SET_OBJECT_SELECTION,
    SET_PRESENTATION_NAME,
    SetBackgroundAction,
    setFontBoldAction,
    setFontColorAction,
    setFontItalicAction,
    setFontSizeAction,
    setFontStrikethroughAction,
    setFontUnderlinedAction,
    SetObjectSelectionAction,
    SetPresentationNameAction,
    editTextItemAction,
    EDIT_TEXT_ITEM,
} from "../actions/presentationActions";
import {BackColor, BackImage, Position} from "../../types/types";

export const createSlide = (): CreateSlideAction => ({
    type: CREATE_SLIDE
});

export const selectSlide = (slideId: string): SelectSlideAction => ({
    type: SELECT_SLIDE,
    payload: slideId
});

export const deleteSlide = (slideId: string): DeleteSlideAction => ({
    type: DELETE_SLIDE,
    payload: slideId
});

export const setPresentationName = (name: string): SetPresentationNameAction => ({
    type: SET_PRESENTATION_NAME,
    payload: name
});

export const addItem = (item: string): AddItemTextAction => ({
    type: ADD_ITEM_TEXT,
    payload: item
});

export const addItemPrimitive = (type: "Triangle" | "Ellipse" | "Rectangle"): AddItemPrimitiveAction => ({
    type: ADD_ITEM_PRIMITIVE,
    payload: type
});

export const removeItem = (itemId: string): RemoveItemAction => ({
    type: REMOVE_ITEM,
    payload: itemId
});

export const moveObject = (positionDelta: Position): MoveObjectAction => ({
    type: MOVE_OBJECT,
    payload: positionDelta
});

export const setObjectSelection = (ids: string[]): SetObjectSelectionAction => ({
    type: SET_OBJECT_SELECTION,
    payload: ids
});

export const SetBackground = (newBackground: BackColor | BackImage): SetBackgroundAction => ({
    type: SET_BACKGROUND,
    payload: newBackground
});

export const changeFontFamily = (ChosenFontFamily: string): changeFontFamilyAction => ({
    type: CHANGE_FONT_FAMILY,
    payload: ChosenFontFamily
});

export const increaseFontSize = (newSize: number): increaseFontSizeAction => ({
    type: INCREASE_FONT_SIZE,
    payload: newSize
});

export const decreaseFontSize = (newSize: number): decreaseFontSizeAction => ({
    type: DECREASE_FONT_SIZE,
    payload: newSize
});

export const setFontSize = (newSize: number): setFontSizeAction => ({
    type: SET_FONT_SIZE,
    payload: newSize
});

export const setFontBold = (boldness: boolean): setFontBoldAction => ({
    type: SET_FONT_BOLD,
    payload: boldness
});

export const setFontItalic = (isItalic: boolean): setFontItalicAction => ({
    type: SET_FONT_ITALIC,
    payload: isItalic
});

export const setFontUnderlined = (isUnderlined: boolean): setFontUnderlinedAction => ({
    type: SET_FONT_UNDERLINED,
    payload: isUnderlined
});

export const setFontStrikethrough = (isStrikethrough: boolean): setFontStrikethroughAction => ({
    type: SET_FONT_STRIKETHROUGH,
    payload: isStrikethrough
});

export const setFontColor = (isColoured: string): setFontColorAction => ({
    type: SET_FONT_COLOR,
    payload: isColoured
});

export const editTextItem = (newText: string): editTextItemAction => ({
    type: EDIT_TEXT_ITEM,
    payload: newText
});