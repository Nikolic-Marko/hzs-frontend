import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface CompaniesState {
    companies: Company[];
}

export interface Company {
    id?: string;
    name: string;
    location: string;
}

const initialState: CompaniesState = {
    companies: [],
};

export const companiesSlice = createSlice({
    name: "companies",
    initialState,
    reducers: {
        addCompany: (state, action: PayloadAction<Company>) => {
            const newCompany = {
                ...action.payload,
                id: uuidv4(),
            };
            state.companies.push(newCompany);
        },
        resetState: () => {
            return initialState;
        },
    },
});

export const { addCompany, resetState } = companiesSlice.actions;
export default companiesSlice.reducer;
