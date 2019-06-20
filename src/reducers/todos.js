import {
    ADD_TODO, 
    TOGGLE_TODO,
    DELETE_TODO
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
            
        default:
            return state
    }
}

export default todo