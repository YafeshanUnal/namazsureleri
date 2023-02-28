import { configureStore } from "@reduxjs/toolkit";
import sure from "./slice";
export const store = configureStore({
	reducer: {
		sure: sure,
	},
});
