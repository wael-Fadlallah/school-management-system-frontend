import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    addStudent: (student) => {},
  },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
