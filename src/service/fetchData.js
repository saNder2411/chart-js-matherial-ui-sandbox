import Axios from 'axios';

const BASE_URL = `https://covid19.mathdro.id/api`;

export const EndPointService = {
  DAILY: `/daily`,
  COUNTRIES: `/countries`,
};

const fetchData = async (url = ``) => {
  try {
    const {data} = await Axios.get(`${fetchData.baseURL}${url}`);

    return data;
  } catch (error) {
    throw error;
  }
};

fetchData.baseURL = BASE_URL;

export default fetchData;