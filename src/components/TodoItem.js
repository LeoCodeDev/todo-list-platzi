import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {

  const onComplete = () => {
    alert(`Se completo la tarea ${props.text}`)
  }

  const onDelete = () => {
    alert(`Se elimino la tarea ${props.text}`)
  }

  return (
    <li className="TodoItem">
        <div className="check-container">
      <span className="check" onClick={onComplete}>✓</span>
        </div>
      <p className="todo">{props.text}</p>
      <div className="closer-container">
      <span className="closer" onClick={onDelete}>X</span>
      </div>
    </li>
  );
};

export { TodoItem };
