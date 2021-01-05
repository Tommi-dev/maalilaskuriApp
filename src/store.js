import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import apartmentReducer from './reducers/apartmentReducer'
import paintFormReducer from './reducers/paintFormReducer'

const reducer = combineReducers({
    apartments: apartmentReducer,
    paintForm: paintFormReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store