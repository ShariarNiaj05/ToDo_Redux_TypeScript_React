// import { useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import NoPendingTaskCard from "./NoPendingTaskCard";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetToDosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  const { data: toDos, error, loading } = useGetToDosQuery(priority);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className=" bg-primary-gradient w-full min-h-[500px] rounded-xl p-5 space-y-10">
        <NoPendingTaskCard />
        {toDos?.data?.map((toDo) => (
          <TodoCard {...toDo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
