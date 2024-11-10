import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  jobs: [],
  candidates: {},
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => { state.jobs.push(action.payload); },
    updateJob: (state, action) => { /* update job logic */ },
    deleteJob: (state, action) => { /* delete job logic */ },
    addCandidate: (state, action) => { /* add candidate logic */ },
    addAssessment: (state, action) => { /* add assessment logic */ },
  },
});

export const { addJob, updateJob, deleteJob, addCandidate, addAssessment } = jobSlice.actions;
export default jobSlice.reducer;
