import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddToDoMutation } from "@/redux/api/api";
import { addTodo } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hooks/hooks";
import { FormEvent, useState } from "react";

const AddTodoModal = () => {
  const [title, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  // const dispatch = useAppDispatch();

  // for server
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddToDoMutation();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2, 8);
    const taskDetails = {
      title,
      description,
      isCompleted: false,
      priority,
    };
    // for server
    await addTodo(taskDetails);
    console.log(data);
    // for local state management
    // dispatch(addTodo(taskDetails));
  };
  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" bg-primary-gradient text-xl font-semibold">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="title"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>

                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Select onValueChange={(value) => setPriority(value)}>
                  <Label htmlFor="priority" className="text-right">
                    Priority
                  </Label>

                  {/*  <Input
                    onBlur={(e) => setPriority(e.target.value)}
                    id="priority"
                    className="col-span-3"
                  /> */}
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Priority</SelectLabel>
                      <SelectItem value="high">Hight</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Save</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
