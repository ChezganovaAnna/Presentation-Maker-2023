import {ActionCreatorsMapObject, bindActionCreators} from 'redux'
import * as presentationActions from '../actionCreators/presentationActionCreators'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "../store";
import {RootState} from "../reducers";
import {PresentationActionTypes} from "../actions/presentationActions";

export const useAppDispatch = () => useDispatch<Dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type ActionCreatorFunction = (...args: any[]) => PresentationActionTypes;

export const usePresentationActions = () => {
    const dispatch = useAppDispatch();

    const logMiddleware = <T extends ActionCreatorsMapObject>(actions: T): T => {
        const wrappedActions: Partial<T> = {};

        (Object.keys(actions) as Array<keyof T>).forEach(actionName => {
            const action = actions[actionName];
            wrappedActions[actionName] = ((...args: any[]) => {
                console.log(`Calling action: ${String(actionName)}`, args);
                return (action as ActionCreatorFunction)(...args);
            }) as T[keyof T];
        });

        return wrappedActions as T;
    };

    return logMiddleware(bindActionCreators(presentationActions, dispatch));
};
