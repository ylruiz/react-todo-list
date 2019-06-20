import * as types from '../constants/actionTypes'

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
})

export const toggleTodo = id => ({ 
    type: types.TOGGLE_TODO, id 
})
