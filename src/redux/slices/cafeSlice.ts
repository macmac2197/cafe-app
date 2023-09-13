import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cafe } from "../../ts/interfaces/appInterface";

interface CafeState {
  cafeList: Array<Cafe>;
}

const initialCafeState = {
  cafeList: [],
} as CafeState;

const cafeSlice = createSlice({
  name: "cafe",
  initialState: initialCafeState,
  reducers: {
    getCafes: (state, action: PayloadAction<Array<Cafe>>) => {
      state.cafeList = action.payload;
    },
  },
});

export default cafeSlice.reducer;
export const { getCafes } = cafeSlice.actions;
