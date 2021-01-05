const paintFormReducer = (state = null, action) => {
    switch(action.type) {
        case 'ADD_PAINT_BASICS':
            state = {...action.data}
            return state
        case 'RESET':
            state = null
            return state
        default:
            return state
    }
}

export const addPaintBasics = paintBasics => {
    return {
        type: 'ADD_PAINT_BASICS',
        data: paintBasics
    }
}

export const resetBasics = () => {
    return {
        type: 'RESET'
    }
}

export default paintFormReducer