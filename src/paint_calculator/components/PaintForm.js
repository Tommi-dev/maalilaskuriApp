import React from 'react'
import { useDispatch } from 'react-redux'
import { addPaintBasics } from '../../reducers/paintFormReducer'

const PaintForm = () => {
    const dispatch = useDispatch()

    const createBasics = (event) => {
        event.preventDefault()

        const paintBasics = {
            price: Number(event.target.price.value),
            spreadingRate: Number(event.target.spreadingRate.value),
            paintLayers: Number(event.target.paintLayers.value)
        }

        event.target.price.value = ''
        event.target.spreadingRate.value = ''
        event.target.paintLayers.value = ''

        dispatch(addPaintBasics(paintBasics))
    }

    return (
        <div className='paintForm-container' >
            <label>
                <h2>Maalin perustiedot</h2>
            </label>
            <form className='paintForm-form' onSubmit={createBasics} >
                <input
                    name='price'
                    type='number'
                    placeholder='Maalin hinta €/l'
                    required
                />
                <input
                    name='spreadingRate'
                    type='number'
                    placeholder='Maalin riittoisuus m2/l'
                    required
                />
                <input
                    name='paintLayers'
                    type='number'
                    placeholder='Maalauskerrat'
                    required
                />
     
                <button type='submit' >Laske</button>
                
            </form>
        </div>
    )
}

export default PaintForm