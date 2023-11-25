import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./companiesSlice";
import jobsReducer from "./jobsSlice";

export const store = configureStore({
    reducer: {
        companies: companiesReducer,
        jobs: jobsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
