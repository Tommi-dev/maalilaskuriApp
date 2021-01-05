import apartmentService from '../services/apartments'

const apartmentReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_APARTMENTS':
            return action.data
        default:
            return state
    }
}

export const initializeApartments = () => {
    return async dispatch => {
        const apartments = await apartmentService.getAllApartments()
        dispatch({
            type: 'INIT_APARTMENTS',
            data: apartments
        })
    }
}

export default apartmentReducer