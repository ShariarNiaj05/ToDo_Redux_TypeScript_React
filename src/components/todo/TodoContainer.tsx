import NoPendingTaskCard from "./NoPendingTaskCard";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className=" bg-purple-900 w-full min-h-[500px] rounded-xl p-5 space-y-10">
        <NoPendingTaskCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
