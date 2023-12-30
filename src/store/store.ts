import {createStore, Dispatch as ReduxDispatch} from 'redux';
import { useDispatch } from 'react-redux';

import {PresentationActionTypes} from "./actions/presentationActions";
import rootReducer from "./reducers";

export type Dispatch = ReduxDispatch<PresentationActionTypes>;
export const useAppDispatch = () => useDispatch<Dispatch>();


const store = createStore(
    rootReducer,
    // applyMiddleware(logger)
);

export default store;
