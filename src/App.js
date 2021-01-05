import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TopBar from './components/TopBar'
import PaintCalculator from './paint_calculator/components/PaintCalculator'
import { initializeApartments } from './reducers/apartmentReducer'
import './App.css'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(initializeApartments())
    }, [dispatch])

    return (
      <div>
        <TopBar />
        <PaintCalculator />
      </div>
    )
  }

export default App