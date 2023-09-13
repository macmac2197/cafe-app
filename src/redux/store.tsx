import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./slices/cafeSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { api } from "../rtk-query/cafeApi";

export const store = configureStore({
  reducer: {
    cafes: cafeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
