
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME';
export const CREATE_SLIDE = 'CREATE_SLIDE';
export const SELECT_SLIDE = 'SELECT_SLIDE';
export const DELETE_SLIDE = 'DELETE_SLIDE';


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

export type PresentationActionTypes =
    | RemoveItemAction
    | SetPresentationNameAction
    | CreateSlideAction
    | SelectSlideAction
    | DeleteSlideAction;
