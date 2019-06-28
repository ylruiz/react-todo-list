import React, { useState } from "react";
import "../styles/TodoItem.css";

const TodoItem = props => {
  let input;

  const [editing, setEditing] = useState(false);

  const editTodo = item => {
    props.editTodo(item, input.value);
    setEditing(false);
  };

  const deleteTodo = item => props.deleteTodo(item);

  const toggleTodo = item => props.toggleTodo(item);

  const { item } = props;
  return (
    <li>
      <div className={!editing ? "container" : "container-editing"}>
        <label className={item.done ? "todo-completed" : "todo"}>
          <input
            id={"toggle" + item.id}
            className="toggle"
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTodo(item)}
          />
          <span className="checkmark"></span>
          <label className="label-desc" onDoubleClick={() => setEditing(true)}>
            {item.description}
          </label>
        </label>
        <button className="delete" onClick={() => deleteTodo(item)}>
          X
        </button>
      </div>
      {editing ? (
        <form onSubmit={() => editTodo(item)}>
          <input
            className="edit"
            type="text"
            defaultValue={item.description}
            ref={node => (input = node)}
            onBlur={() => editTodo(item)}
          />
        </form>
      ) : null}
    </li>
  );
};

export default TodoItem;
