import React, { useReducer }from 'react'
import './App.css'
import todo from './reducers/todos'
import * as actions from './actions/todos'
import initialState from './constants/initialState'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

const App = () => {
  
  const [todos, dispatch] = useReducer(
    todo,
    initialState
  )

  /* 
   * HEADER ACTIONS 
   */
  const addTodo = text => {
    dispatch(actions.addTodo(text));
  }

  const deleteAllTodos = () => {
    dispatch(actions.deleteAllTodos)
  }

  const incompletedTodos = todos.filter(todo => !todo.done)

  /*
   * MAIN_SECTION ACTIONS
   */
  const completeTodo = todo => {
    dispatch(actions.completeTodo(todo.id));
  }

  return (
    <div>
      <Header onAddTodo={addTodo} onDeleteAllTodos={deleteAllTodos}/>
      <MainSection list={todos} onCompleteTodo={completeTodo}/>
      <Footer count={incompletedTodos.length} />
    </div>
  )
}

export default App;
