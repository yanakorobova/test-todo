import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import s from "./AddTaskForm.module.scss";

type AddItemFormPropsType = {
  callback: (title: string) => void;
  text: string;
};

export const AddTaskForm: React.FC<AddItemFormPropsType> = ({
  callback,
  text,
}) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string>("");

  const addItem = () => {
    if (title.trim()) {
      callback(title.trim());
      setTitle("");
    } else setError("Title is required");
  };
  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    error && setError("");
    e.key === "Enter" && addItem();
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value.trimStart());
  };

  return (
    <div className={s.wrapper}>
      <input
        value={title}
        onChange={onChangeHandler}
        onKeyDown={onEnter}
        placeholder={text}
      />
    </div>
  );
};
