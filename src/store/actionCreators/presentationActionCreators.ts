
import {
    CREATE_SLIDE, CreateSlideAction,
    DELETE_SLIDE, DeleteSlideAction,
    REMOVE_ITEM, RemoveItemAction,
    SELECT_SLIDE, SelectSlideAction,
    SET_PRESENTATION_NAME, SetPresentationNameAction,
} from "../actions/presentationActions";


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

export const addItem = (item: string): AddTextItemAction => ({
    type: ADD_ITEM_TEXT,
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
