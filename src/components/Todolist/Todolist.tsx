import { useState } from "react";
import s from "./Todolist.module.scss";
import { Task } from "./Task/Task";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { Button, Card } from "antd";

export type FilterType = "All" | "Completed" | "Active";

export type TaskType = {
  status: FilterType;
  title: string;
  id: string;
};

export const Todolist = () => {
  const [filter, setFilter] = useState<FilterType>("All");
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const setFilterHandler = (filter: FilterType) => setFilter(filter);

  const addTask = (title: string) =>
    setTasks([...tasks, { id: "" + Math.random(), title, status: "Active" }])

  const changeTaskStatus = (id: string, filter: FilterType) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, status: filter } : t
    );
    setTasks(newTasks);
  };

  const renderFilterButton = (buttonFilter: FilterType) => {
    return (
      <Button
        className={filter === buttonFilter ? s.active : ""}
        onClick={() => setFilterHandler(buttonFilter)}
      >
        {buttonFilter}
      </Button>
    );
  };
  
  const removeTasksCompleted = () => {
    setTasks(tasks.filter((t) => t.status !== "Completed"));
  };

  const filteredTasks =
    filter === "Active"
      ? tasks.filter((t) => t.status === "Active")
      : filter === "Completed"
      ? tasks.filter((t) => t.status === "Completed")
      : tasks;

  const tasksElements = filteredTasks.length ? (
    filteredTasks.map((task: TaskType) => {
      return (
        <Task key={task.id} task={task} changeTaskStatus={changeTaskStatus} />
      );
    })
  ) : (
    <span>List is empty</span>
  );


  return (
    <Card className={s.card}>
      <AddTaskForm callback={addTask} text={"What needs to be done?"} />
      <ul className={s.tasks}>{tasksElements}</ul>
      <div className={s.panel}>
        <div>
          {renderFilterButton("All")}
          {renderFilterButton("Active")}
          {renderFilterButton("Completed")}
        </div>
        {filter !== "Active" && (
          <div>
            <Button onClick={removeTasksCompleted}>Clear completed</Button>
          </div>
        )}
      </div>
    </Card>
  );
};
