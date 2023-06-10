import { FilterType, TaskType } from "../Todolist";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import s from "../Todolist.module.scss";

type TaskPropsType = {
  task: TaskType;
  changeTaskStatus: (id: string, filter: FilterType) => void;
};

export const Task: React.FC<TaskPropsType> = ({ task, changeTaskStatus }) => {
  const { id, title, status } = task;

  const changeStatusHandler = (e: CheckboxChangeEvent) => {
    const newStatus = e.target.checked ? "Completed" : "Active";
    changeTaskStatus(id, newStatus);
  };
  
  return (
    <li key={id}>
      <Checkbox
        onChange={changeStatusHandler}
        checked={status === "Completed" ? true : false}
      />
      <span className={status === "Completed" ? s.completedTask : ""}>
        {title}
      </span>
    </li>
  );
};
