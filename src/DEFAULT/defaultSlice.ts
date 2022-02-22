import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {payloadDefaultTypes, ProcessState} from './types';

export interface Define_initial_State {
  value: number;
  second: number;
  processState: string;
  error: string;
}

const initialState = {
  value: 0,
  second: 1000,
  processState: ProcessState.INIT,
  error: '',
} as Define_initial_State;

const defaultSlice = createSlice({
  name: 'default',
  initialState,
  reducers: {
    defaultEpicAction(state, action: PayloadAction<payloadDefaultTypes>) {
      state.processState = ProcessState.LOADING;
    },
    defaultEpicToSuccessAction(
      state,
      action: PayloadAction<payloadDefaultTypes>,
    ) {
      state.value = action.payload.value;
      state.second = action.payload.second;
      state.processState = ProcessState.SUCCESS;
    },
    defaultEpicToErrorAction(
      state,
      action: PayloadAction<payloadDefaultTypes>,
    ) {
      state.processState = ProcessState.ERROR;
      state.second = action.payload.second;
      state.error = action.payload.error;
    },
  },
});

export const {
  defaultEpicAction,
  defaultEpicToSuccessAction,
  defaultEpicToErrorAction,
} = defaultSlice.actions;
export default defaultSlice.reducer;
