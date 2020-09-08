import { combineReducers } from 'redux'

const charactersReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    characters: charactersReducer,
})