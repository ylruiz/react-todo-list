import React, { useReducer } from 'react'
import './App.css'
import todo from './reducers/todos'
import * as actions from './actions/todos'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer';

const App = () => {
  const initialState = []
  const [todos, dispatch] = useReducer (
    todo,
    initialState
  )

  /* HEADER ACTIONS */
  const addTodo = text => {
    dispatch(actions.addTodo(text))
  }

  const toggleTodos = () => {
    dispatch(actions.toggleTodos())
  }

  /*
   * MAIN_SECTION ACTIONS
   */
  const toggleTodo = todo => {
    dispatch(actions.toggleTodo(todo.id))
  }

  const deleteTodo = todo => {
    dispatch(actions.deleteTodo(todo.id))
  }

  /* FOOTER ACTIONS */
  const incompletedTodos = todos.filter(todo => !todo.done)

  return (
    <div class='App'>
      <Header onAddTodo={addTodo} onToggleTodos={toggleTodos}/>
      <MainSection list={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo}/>
      <Footer count={incompletedTodos.length}/>
    </div>
  )
}

export default App
