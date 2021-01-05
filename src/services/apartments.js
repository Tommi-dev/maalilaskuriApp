import axios from 'axios'

const url = 'http://localhost:3001/apartments'

const getAllApartments = async () => {
    const response = await axios.get(url)
    return response.data
}

export default { getAllApartments }