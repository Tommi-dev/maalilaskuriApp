import React from 'react'
import PaintForm from './PaintForm'
import Dashboard from './Dashboard'

const PaintCalculator = ({value=false}) => {

    if (value) {
        return (
            <>
                <PaintForm />
            </>
        )
    }
    return (
        <>
            <Dashboard />
        </>
    )
}

export default PaintCalculator