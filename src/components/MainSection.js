import React from "react";
import "../styles/MainSection.css";
import TodoItem from "./TodoItem";

const MainSection = props => {
  const getVisibleFilter = (todos, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;

      case "SHOW_ACTIVE":
        return todos.filter(todo => !todo.done);

      case "SHOW_COMPLETED":
        return todos.filter(todo => todo.done);

      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

  const list = getVisibleFilter(props.list, props.filter);

  return (
    <section className="main-section">
      <ul className="todos">
        {list.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            toggleTodo={props.onToggleTodo}
            deleteTodo={props.onDeleteTodo}
            editTodo={props.onEditTodo}
          />
        ))}
      </ul>
    </section>
  );
};

export default MainSection;
