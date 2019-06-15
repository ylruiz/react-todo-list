import {
    ADD_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED
} from '../constants/actionTypes'

let newId = 0

const todo = (state, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: newId++,
            description: action.text,
            done: false,
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

export default todo
  
