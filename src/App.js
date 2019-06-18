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

  return (
    <div>
      <Header onAddTodo={addTodo} />
      <MainSection list={todos} />
    </div>
  )
}

export default App
