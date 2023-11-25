import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface JobsState {
    jobs: Job[];
}

export interface Job {
    id?: string;
    title: string;
    salaray: string;
    companyName: string;
    applicants?: string[];
}

const initialState: JobsState = {
    jobs: [],
};

export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        addJob: (state, action: PayloadAction<Job>) => {
            const newJob = {
                ...action.payload,
                id: uuidv4(),
            };
            state.jobs.push(newJob);
        },
        applyForJob(state, action: PayloadAction<Job>) {
            const { id, applicants } = action.payload;
            const jobToUpdate = state.jobs.find((job) => job.id === id);
            if (jobToUpdate) {
                jobToUpdate.applicants = applicants;
            }
        },
        resetState: () => {
            return initialState;
        },
    },
});

export const { addJob, resetState, applyForJob } = jobsSlice.actions;
export default jobsSlice.reducer;
