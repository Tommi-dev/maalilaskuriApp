import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PaintCalculator from './paint_calculator/components/PaintCalculator'
import { initializeApartments } from './reducers/apartmentReducer'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(initializeApartments())
    }, [dispatch])

    return (
      <div>
        <PaintCalculator />
      </div>
    )
  }

export default App