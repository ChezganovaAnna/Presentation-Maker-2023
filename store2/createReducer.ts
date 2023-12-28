type Action<T> = {
  type: string;
  payload?: T;
};

type Handlers<TState> = {
  [actionType: string]: (state: TState, payload?: any) => TState;
};

export const createReducer = <TState>(initialState: TState, handlers: Handlers<TState>) => {
  return (state = initialState, action: Action<any>) => {
    const handler = handlers[action.type];

    if (handler)
      return handler(state, action)
    return state;
  };
};