export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME';
export const CREATE_SLIDE = 'CREATE_SLIDE';
export const SELECT_SLIDE = 'SELECT_SLIDE';
export const DELETE_SLIDE = 'DELETE_SLIDE';

interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: string;
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: string;
}

interface SetPresentationNameAction {
    type: typeof SET_PRESENTATION_NAME;
    payload: string;
}

interface CreateSlideAction {
    type: typeof CREATE_SLIDE;
}

interface SelectSlideAction {
    type: typeof SELECT_SLIDE;
    payload: string;
}

interface DeleteSlideAction {
    type: typeof DELETE_SLIDE;
    payload: string;
}

export type PresentationActionTypes =
    | AddItemAction
    | RemoveItemAction
    | SetPresentationNameAction
    | CreateSlideAction
    | SelectSlideAction
    | DeleteSlideAction;

// Action creators

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

export const addItem = (item: string): AddItemAction => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (itemId: string): RemoveItemAction => ({
    type: REMOVE_ITEM,
    payload: itemId
});

export const setPresentationName = (name: string): SetPresentationNameAction => ({
    type: SET_PRESENTATION_NAME,
    payload: name
});
