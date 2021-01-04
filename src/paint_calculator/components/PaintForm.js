import React from 'react'

const PaintForm = () => {
    return (
        <div>
            <label>
                <h1>Maalin perustiedot</h1>
            </label>
            <form>
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