import { combineReducers } from 'redux';
import presentationReducer from './presentationReducer';

const rootReducer = combineReducers({
    presentation: presentationReducer,

    // other reducers
    ////////а какие например other?
});

export default rootReducer;

// Export the type of the root reducer's return value
export type RootState = ReturnType<typeof rootReducer>;