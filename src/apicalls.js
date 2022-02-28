import axios from 'axios'

export const obtenerTodasLasCiudades = async () => {
    try {
        let data = await axios.get('http://localhost:4000/api/todaslasciudades')
        return data

    }
    catch (error) {
        throw error
    }
}

export const agregarCiudad = async (input) => {
    console.log(input);
    try {
        let data = await axios.post('http://localhost:4000/api/todaslasciudades', { input })
        return data
    }
    catch (error) {
        throw error
    }
}

export const eliminarCiudad = async (id) => {
    console.log(id);
    try {
        let data = await axios.delete(`http://localhost:4000/api/todaslasciudades/${id}`)
        return data
    } catch (error) {
        throw error

    }
}