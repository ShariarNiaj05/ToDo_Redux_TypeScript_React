import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import NoPendingTaskCard from "./NoPendingTaskCard";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient w-full min-h-[500px] rounded-xl p-5 space-y-10">
        <NoPendingTaskCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
