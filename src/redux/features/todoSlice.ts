import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {},
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
