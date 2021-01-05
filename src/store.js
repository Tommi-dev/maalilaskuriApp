import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import apartmentReducer from './reducers/apartmentReducer'

const store = createStore(
    apartmentReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store