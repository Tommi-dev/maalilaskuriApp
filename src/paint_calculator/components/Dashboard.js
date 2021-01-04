import React from 'react'
import Apartments from './Apartments'

const Dashboard = () => {
    return (
        <div>
            <div className='housing-cooperative' >
                <h2>Taloyhtiön laskelma</h2>
                <div className='wrap-container' >
                    <div className='housing-cooperative-result' >
                        <h3>Maalin tarve litroina</h3>
                        <p></p>
                    </div>
                    <div className='housing-cooperative-result' >
                        <h3>Kokonaiskustannukset euroina</h3>
                        <p></p>
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
                <button>Nollaa</button>
            </div>
        </div>
    )
}

export default Dashboard