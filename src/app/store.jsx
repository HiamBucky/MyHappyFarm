import { configureStore } from '@reduxjs/toolkit';
import moduleReducer from "../features/moduleSlice";

export const store = configureStore({
    reducer: {
        module: moduleReducer,
    },
});