import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Apartments from './Apartments'
import { resetBasics } from '../../reducers/paintFormReducer'
import { hcPaintNeeds, hcTotalCost } from '../Calculator'

const Dashboard = () => {
    const dispatch = useDispatch()

    const apartments = useSelector(state => state.apartments)
    const paintBasics = useSelector(state => state.paintForm)

    return (
        <div>
            <div className='housing-cooperative' >
                <h2>Taloyhtiön laskelma</h2>
                <div className='wrap-container' >
                    <div className='housing-cooperative-result' >
                        <h3>Maalin tarve litroina</h3>
                        <p> {hcPaintNeeds(apartments, paintBasics)} </p>
                    </div>
                    <div className='housing-cooperative-result' >
                        <h3>Kokonaiskustannukset euroina</h3>
                        <p> {hcTotalCost(apartments, paintBasics)} </p>
                    </div>
                </div>
            </div>

            <div className='apartments' >
                <h2>Asuntojen laskelma</h2>
                <div className='wrap-container' >
                    <Apartments />
                </div>
            </div>

            <div className='reset-button-container' >
                <button onClick={() => dispatch(resetBasics())} >Nollaa</button>
            </div>
        </div>
    )
}

export default Dashboard