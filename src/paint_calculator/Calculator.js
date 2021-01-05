// ------ HOUSING COOPERATIVE ------ //
// Calculate the paint needs of the housing cooperative
export const hcPaintNeeds = (apartments, paintBasics) => {
    let sum = 0
    if (paintBasics !== null) {
        for (let i = 0; i < apartments.length; i++) {
            sum += apartments[i].rooms.reduce((sum, room) => sum + (Number(room.totalPaintableArea) / paintBasics.spreadingRate * paintBasics.paintLayers), 0)
        }
        return sum.toFixed(2)
    }
    return sum
}

// Calculate the total cost of the paint
export const hcTotalCost = (apartments, paintBasics) => {
    const paintNeeds = hcPaintNeeds(apartments, paintBasics)
    return (paintNeeds * paintBasics.price).toFixed(2)
}


// ------ APARTMENT ------ //
// Calculate the total area of the apartment
export const aPaintArea = (apartment) => {
    return apartment.rooms.reduce((sum, room) => sum + Number(room.totalPaintableArea), 0)
}

// Calculate the paint needs of the apartment
export const aPaintNeeds = (apartment, paintBasics) => {
    return apartment.rooms.reduce((sum, room) => sum + (Number(room.totalPaintableArea) / paintBasics.spreadingRate * paintBasics.paintLayers), 0).toFixed(2)
}

// Calculate the total cost of the paint
export const aTotalCost = (apartment, paintBasics) => {
    const needs = aPaintNeeds(apartment, paintBasics)
    return (needs * paintBasics.price).toFixed(2)
}