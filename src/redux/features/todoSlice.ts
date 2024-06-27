import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
type TToDos = {
  id: string;
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
    removeToDo: (state, action: PayloadAction<string>) => {
      state.toDos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;
