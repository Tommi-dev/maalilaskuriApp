import React from 'react'
import { useSelector } from 'react-redux'
import { aPaintNeeds, aPaintArea, aTotalCost } from '../Calculator'

const Apartment = ({ apartment }) => {
    const paintBasics = useSelector(state => state.paintForm)

    return (
        <div className='apartment-container' >
            <h4> {apartment.name} </h4>
            <div className='apartment-result' >
                <h5>Maalattava kokonaispinta-ala</h5>
                <p> {aPaintArea(apartment)} </p>
            </div>
            <div className='apartment-result' >
                <h5>Maalin tarve l</h5>
                <p> {aPaintNeeds(apartment, paintBasics)} </p>
            </div>
            <div className='apartment-result' >
                <h5>Kokonaiskustannukset €</h5>
                <p> {aTotalCost(apartment, paintBasics)} </p>
            </div>
        </div>
    )
}

export default Apartment