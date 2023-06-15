import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./state/Products/productsSlice";

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"

const store = configureStore({
  reducer: {
    products: productsSlice,
    
    
  },
});

export default store 

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<typeof store.getState> = useSelector
