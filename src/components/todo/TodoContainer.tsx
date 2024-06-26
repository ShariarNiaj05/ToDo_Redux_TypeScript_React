import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className=" bg-purple-900 w-full min-h-[500px] rounded-xl p-5 space-y-10">
        {/*  <div className=" bg-white p-5 flex justify-center items-center rounded-md">
          <p className="text-center text-2xl font-bold">
            There is no task pending
          </p>
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
