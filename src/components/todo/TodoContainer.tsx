import { useAppSelector } from "@/redux/hooks/hooks";
import AddTodoModal from "./AddTodoModal";
import NoPendingTaskCard from "./NoPendingTaskCard";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetToDosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // from local state
  const { toDos } = useAppSelector((state) => state.toDos);

  // from server
  const { data, error, loading } = useGetToDosQuery(undefined);
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
