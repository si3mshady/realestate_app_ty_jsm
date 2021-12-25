import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) => {

    const {data} = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '3962dfaca8msh523e08bf14dab49p1366f9jsnfb34a1d09509'
          }
    })

    return data 
}


// Resume Video 