import React from 'react'
import PaintForm from './PaintForm'
import Dashboard from './Dashboard'
import { useSelector } from 'react-redux'

const PaintCalculator = ({value=false}) => {

    const formStatus = useSelector(state => state.paintForm)

    if (formStatus === null) {
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