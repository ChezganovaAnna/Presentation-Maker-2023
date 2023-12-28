import { createStore } from 'redux';
import rootReducer from './reducers';
import { Dispatch as ReduxDispatch } from 'redux';
import {PresentationActionTypes} from "./actions/presentationActions";

export type Dispatch = ReduxDispatch<PresentationActionTypes>;
const store = createStore(rootReducer);
export default store;
