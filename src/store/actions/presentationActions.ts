import {BackColor, BackImage, Position, Primitive} from "../../types/types";

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ITEM_TEXT = 'ADD_ITEM_TEXT';
export const ADD_ITEM_PRIMITIVE = 'ADD_ITEM_PRIMITIVE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME';
export const CREATE_SLIDE = 'CREATE_SLIDE';
export const SELECT_SLIDE = 'SELECT_SLIDE';
export const DELETE_SLIDE = 'DELETE_SLIDE';
export const SET_OBJECT_SELECTION = 'SET_OBJECT_SELECTION';
export const MOVE_OBJECT = 'MOVE_OBJECT';
export const SET_BACKGROUND = 'SET_BACKGROUND';
export const INCREASE_FONT_SIZE = 'INCREASE_FONT_SIZE';
export const DECREASE_FONT_SIZE = 'DECREASE_FONT_SIZE';
export const SET_FONT_SIZE = 'SET_FONT_SIZE';
export const SET_FONT_BOLD = 'SET_FONT_BOLD';
export const CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY';
export const SET_FONT_ITALIC = 'SET_FONT_ITALIC';
export const SET_FONT_UNDERLINED = 'SET_FONT_UNDERLINED';
export const SET_FONT_STRIKETHROUGH = 'SET_FONT_STRIKETHROUGH';
export const SET_FONT_COLOR = 'SET_FONT_COLOR';

export const EDIT_TEXT_ITEM = 'EDIT_TEXT_ITEM';

export const createAddItemToPresentation = (
    slideId: number,
    textItem: Text,
    primitiveItem: Primitive | null,
    index: number,
    type: "ADD_ITEM"
) => {
    return {
        payload: {
            slideId,
            textItem,
            primitiveItem,
            index,
            type,
        },
        type: "ADD_ITEM",
    };
};

export interface AddItemTextAction {
    type: typeof ADD_ITEM_TEXT;
    payload: string;
}

export interface AddItemPrimitiveAction {
    type: typeof ADD_ITEM_PRIMITIVE;
    payload: "Triangle" | "Ellipse" | "Rectangle";
}

export interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: string;
}

export interface SetPresentationNameAction {
    type: typeof SET_PRESENTATION_NAME;
    payload: string;
}

export interface CreateSlideAction {
    type: typeof CREATE_SLIDE;
}

export interface SelectSlideAction {
    type: typeof SELECT_SLIDE;
    payload: string;
}

export interface DeleteSlideAction {
    type: typeof DELETE_SLIDE;
    payload: string;
}

export interface SetObjectSelectionAction {
    type: typeof SET_OBJECT_SELECTION;
    payload: string[];
}

export interface MoveObjectAction {
    type: typeof MOVE_OBJECT;
    payload: Position;
}

export interface SetBackgroundAction {
    type: typeof SET_BACKGROUND;
    payload: BackColor | BackImage;
}

export interface changeFontFamilyAction {
    type: typeof CHANGE_FONT_FAMILY;
    payload: string;
}

export interface increaseFontSizeAction {
    type: typeof INCREASE_FONT_SIZE;
    payload: number;
}

export interface decreaseFontSizeAction {
    type: typeof DECREASE_FONT_SIZE;
    payload: number;
}


export interface setFontSizeAction {
    type: typeof SET_FONT_SIZE;
    payload: number;
}

export interface setFontBoldAction {
    type: typeof SET_FONT_BOLD;
    payload: boolean;
}

export interface setFontItalicAction {
    type: typeof SET_FONT_ITALIC;
    payload: boolean;
}

export interface setFontUnderlinedAction {
    type: typeof SET_FONT_UNDERLINED;
    payload: boolean;
}
export interface setFontStrikethroughAction {
    type: typeof SET_FONT_STRIKETHROUGH;
    payload: boolean;
}

export interface setFontColorAction {
    type: typeof SET_FONT_COLOR;
    payload: string;
}

export interface editTextItemAction {
    type: typeof EDIT_TEXT_ITEM;
    payload: string;
}

export type PresentationActionTypes =
    | AddItemTextAction
    | RemoveItemAction
    | SetObjectSelectionAction
    | SetPresentationNameAction
    | CreateSlideAction
    | SelectSlideAction
    | MoveObjectAction
    | DeleteSlideAction
    | SetBackgroundAction
    | changeFontFamilyAction
    | increaseFontSizeAction
    | decreaseFontSizeAction
    | setFontSizeAction
    | setFontBoldAction
    | setFontItalicAction
    | setFontUnderlinedAction
    | setFontStrikethroughAction
    | setFontColorAction
    | AddItemPrimitiveAction
    | editTextItemAction;
