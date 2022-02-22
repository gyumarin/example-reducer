import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {payloadSomeTypes, ProcessState} from './types';

interface SomeState {
  value: number;
  processState: number;
}

const initialState = {value: 0, processState: ProcessState.None} as SomeState;

const someSlice = createSlice({
  //name :
  name: 'some',
  initialState,
  reducers: {
    exampleAction(state) {
      state.value += 1;
    },
    examplePayloadAction(state, action: PayloadAction<payloadSomeTypes>) {
      state.value = action.payload.someValue1 + action.payload.someValue2;
    },
    exampleEpicAction(state, action: PayloadAction<payloadSomeTypes>) {
      state;
    },
    exampleEpicToSuccessAction(state, action: PayloadAction<payloadSomeTypes>) {
      state.value = action.payload.someValue1 * action.payload.someValue2;
    },
  },
});

export const {
  exampleAction,
  examplePayloadAction,
  exampleEpicAction,
  exampleEpicToSuccessAction,
} = someSlice.actions;
export default someSlice.reducer;
