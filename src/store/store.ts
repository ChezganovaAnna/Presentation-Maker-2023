import {createStore, Dispatch as ReduxDispatch} from 'redux';
import { useDispatch } from 'react-redux';

import {PresentationActionTypes} from "./actions/presentationActions";
import rootReducer from "./reducers";

export type Dispatch = ReduxDispatch<PresentationActionTypes>;
export const useAppDispatch = () => useDispatch<Dispatch>();
//
// const loggerMiddleware: Middleware = (store) => (next) => (action) => {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', store.getState());
//     return result;
// };
//
// const logger: Middleware<{}, RootState> = ({ getState }) => {
//     return (next: Dispatch<AnyAction>) => (action: AnyAction) => {
//         console.log('will dispatch', action);
//
//         // Call the next dispatch method in the middleware chain.
//         const returnValue = next(action);
//
//         console.log('state after dispatch', getState());
//
//         // This will likely be the action itself, unless
//         // a middleware further in chain changed it.
//         return returnValue;
//     }
// }

const store = createStore(
    rootReducer,
    // applyMiddleware(logger)
);

export default store;
