import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '0ab529b59cmsh3559aa7fe15a1e9p1d92a0jsn84fba79c90f9',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
    
  return data;
}