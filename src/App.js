import React, { useReducer } from "react";
import "./App.css";
import todo from "./reducers/todos";
import { visibilityFilter } from "./reducers/filters";
import * as actions from "./actions/todos";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

const App = () => {
  const initialState = [];
  const initialFilter = "SHOW_ALL";

  const [todos, dispatch] = useReducer(todo, initialState);
  const [filter, setFilter] = useReducer(visibilityFilter, initialFilter);

  /* HEADER ACTIONS */
  const addTodo = text => dispatch(actions.addTodo(text));

  const toggleTodos = () => dispatch(actions.toggleTodos());

  /*
   * MAIN_SECTION ACTIONS
   */
  const toggleTodo = todo => dispatch(actions.toggleTodo(todo.id));

  const deleteTodo = todo => dispatch(actions.deleteTodo(todo.id));

  const editTodo = (todo, text) => dispatch(actions.editTodo(todo.id, text));

  /* FOOTER ACTIONS */
  const showFooter = todos.length > 0 ? true : false;

  const incompletedTodos = todos.filter(todo => !todo.done);

  const clearCompleted = () => dispatch(actions.clearCompleted());

  const setVisibilityFilter = newFilter => {
    setFilter(actions.setVisibilityFilter(newFilter));
  };

  return (
    <div className="App">
      <Header
        total={todos.length}
        count={incompletedTodos.length}
        onAddTodo={addTodo}
        onToggleTodos={toggleTodos}
      />

      <MainSection
        list={todos}
        filter={filter}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />

      {showFooter ? (
        <Footer
          total={todos.length}
          count={incompletedTodos.length}
          filter={filter}
          onClearCompleted={clearCompleted}
          onFilter={setVisibilityFilter}
        />
      ) : null}
    </div>
  );
};

export default App;
