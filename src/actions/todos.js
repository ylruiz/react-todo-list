import * as types from '../constants/actionTypes'

export const addTodo = text => ({
    type: types.ADD_TODO, 
    text
})

export const deleteTodo = id => ({
    type: types.DELETE_TODO, 
    id
})

export const deleteAllTodos = () => ({
    type: types.DELETE_ALL_TODO
})

export const completeTodo = id => ({ 
    type: types.COMPLETE_TODO, id 
})

export const completeAllTodos = () => ({ 
    type: types.COMPLETE_ALL_TODOS 
})

export const clearCompleted = () => ({ 
    type: types.CLEAR_COMPLETED 
})