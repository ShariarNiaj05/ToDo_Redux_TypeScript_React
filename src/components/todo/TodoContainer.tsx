import { useAppSelector } from "@/redux/hooks/hooks";
import AddTodoModal from "./AddTodoModal";
import NoPendingTaskCard from "./NoPendingTaskCard";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { todo } from "node:test";

const TodoContainer = () => {
  const { toDos } = useAppSelector((state) => state.toDos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient w-full min-h-[500px] rounded-xl p-5 space-y-10">
        <NoPendingTaskCard />
        {toDos?.map((toDo) => (
          <TodoCard {...toDo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
