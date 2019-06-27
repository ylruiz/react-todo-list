import * as types from '../constants/actionTypes'

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
})

export const toggleTodo = id => ({ 
    type: types.TOGGLE_TODO, id 
})

export const deleteTodo = id => ({
    type: types.DELETE_TODO, 
    id
})

export const toggleTodos = () => ({ 
    type: types.TOGGLE_TODOS
})

export const clearCompleted = () => ({ 
    type: types.CLEAR_COMPLETED 
})

export const editTodo = (id, text) => ({ 
    type: types.EDIT_TODO, 
    id,
    text
})

/* Visibility Filters */ 

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})