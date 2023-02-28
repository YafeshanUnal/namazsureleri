import { configureStore } from "@reduxjs/toolkit";
import sure from "../store/slice";
export const store = configureStore({
    reducer: {
        sure: sure,
    }
})
