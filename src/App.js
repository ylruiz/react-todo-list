import React, { useReducer } from 'react'
import './App.css'
import todo from './reducers/todos'
import * as actions from './actions/todos'
import Header from './components/Header'
import MainSection from './components/MainSection'

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

  /*
   * MAIN_SECTION ACTIONS
   */
  const toggleTodo = todo => {
    dispatch(actions.toggleTodo(todo.id))
  }

  const deleteTodo = todo => {
    dispatch(actions.deleteTodo(todo.id))
  }

  return (
    <div class='App'>
      <Header onAddTodo={addTodo} />
      <MainSection list={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
