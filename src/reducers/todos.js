import {
    ADD_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED
} from '../constants/ActionTypes'

export default function todos(state, action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          }
        ]
  
      case DELETE_TODO:
        return state.filter(todo =>
          todo.id !== action.id
        )
  
      case DELETE_ALL_TODO:
        return []
  
      case COMPLETE_TODO:
        return state.map(todo =>
          todo.id === action.id ? 
            { ...todo, done: !todo.done } :
            todo
        )
  
      case COMPLETE_ALL_TODOS:
        const completed = state.every(todo => todo.done)
        return state.map(todo => ({
          ...todo,
          done: !completed
        }))
  
      case CLEAR_COMPLETED:
        return state.filter(todo => todo.done === false)
  
      default:
        return state
    }
}
  
