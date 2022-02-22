import { combineReducers } from "redux";
import { PROCESS_RESET_REDUCER, PROCESS_ONE_REDUCER } from "./actions";
import { ProcessState } from "./view";
export interface ActionInterface {
  type: string;
  payload: any;
}

const exampleReducer: any = (
  state = { processState: ProcessState.None },
  action: ActionInterface
) => {
  switch (action.type) {
    case PROCESS_RESET_REDUCER:
      return { processState: ProcessState.None };
    case PROCESS_ONE_REDUCER:
      return { processState: ProcessState.ONE };
  }
  return { ...state };
};

export const exampleRootReducer = exampleReducer;
