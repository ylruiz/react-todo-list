import {
    ADD_TODO, 
    TOGGLE_TODO,
    DELETE_TODO,
    TOGGLE_TODOS,
    EDIT_TODO
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
                    done: false
                }
            ]
        
        case TOGGLE_TODO: 
            return state.map(todo =>
                todo.id === action.id ? 
                { ...todo, done: !todo.done } :
                todo
            )   
        
        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            )
        
        case TOGGLE_TODOS:
            const completed = state.every(todo => todo.done)
            return state.map(todo => ({
                ...todo,
                done: !completed
            }))

        case EDIT_TODO: 
        return state.map(todo =>
            todo.id === action.id ? 
            { ...todo, text: action.text } :
            todo
        ) 
         
        default:
            return state
    }
}

export default todo