import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {payloadGorestTypes, Gorest, payloadDeleteTypes} from './types';

export interface GorestState {
  gorest: Gorest;
}

const initialState = {gorest: {} as Gorest} as GorestState;

const gorestSlice = createSlice({
  //name :
  name: 'gorest',
  initialState,
  reducers: {
    deleteGorestAction(state, action: PayloadAction<payloadDeleteTypes>) {
      state.gorest.data.splice(
        state.gorest.data.findIndex(t => t.id === action.payload.id),
        1,
      );
    },
    getGorestEpicAction(state, action: PayloadAction<payloadGorestTypes>) {
      state;
    },
    getGorestEpicToSuccessAction(
      state,
      action: PayloadAction<payloadGorestTypes>,
    ) {
      state.gorest = action.payload.gorest;
    },
  },
});

export const {
  getGorestEpicAction,
  getGorestEpicToSuccessAction,
  deleteGorestAction,
} = gorestSlice.actions;
export default gorestSlice.reducer;
