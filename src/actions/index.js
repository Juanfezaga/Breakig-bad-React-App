import axios from 'axios'

export const fetchCharacters = (query) => async (dispatch) => {
    const response = await axios.get(`https://www.breakingbadapi.com/api/characters/?name=${query}`)
    
    dispatch({
        type: 'FETCH_CHARACTERS',
        payload:  response.data
    })
}