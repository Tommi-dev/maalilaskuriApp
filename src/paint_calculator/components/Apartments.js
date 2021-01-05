import React from 'react'
import { useSelector } from 'react-redux'
import Apartment from './Apartment'

const Apartments = () => {

    const apartments = useSelector(state => state.apartments)

    return (
        <>  
            {apartments.map(apartment =>
                <Apartment key={apartment.name} apartment={apartment} />
            )}
        </>
    )
}

export default Apartments