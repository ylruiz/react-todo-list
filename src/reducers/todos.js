import {
    ADD_TODO
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
            
        default:
            return state
    }
}

export default todo