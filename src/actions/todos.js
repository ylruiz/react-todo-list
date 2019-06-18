import * as types from '../constants/actionTypes'

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
})