import { AnyAction } from 'redux';
import { ActionType, getType } from "typesafe-actions";
import { setLoading } from "./actions";

export type LoadingAction = ActionType<typeof setLoading>;

// tslint:disable-next-line:no-empty-interface
export interface LoadingState {
  [key: string]: boolean;
}

const initialState: LoadingState = {};

const reducer = (state: LoadingState = initialState, action: AnyAction) => {
  const typedAction = action as LoadingAction;
  switch(typedAction.type) {
    case getType(setLoading):
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
