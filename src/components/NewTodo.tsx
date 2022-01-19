import React, { useRef } from "react";

import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

export const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todoText">Todo Text</label>
        <input type="text" id="todoText" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
