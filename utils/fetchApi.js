import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c53621371dmshccc65a6c368a1b3p16ba1fjsn0cb3a649d689',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}