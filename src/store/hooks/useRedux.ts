import {bindActionCreators} from 'redux'
import * as presentationActions from '../actionCreators/presentationActionCreators'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "../store";
import {RootState} from "../reducers";

export const useAppDispatch = () => useDispatch<Dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const usePresentationActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(presentationActions, dispatch)
}

export const useSlideActions = () => {
    const dispatch = useAppDispatch()
    const addSlideObject = (slideId, objectType, data) => {
        dispatch(addObject(slideId, objectType, data));
    };
}