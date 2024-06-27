import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
type TToDos = {
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  toDos: TToDos[];
};

const initialState: TInitialState = {
  toDos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TToDos>) => {
      state.toDos.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
