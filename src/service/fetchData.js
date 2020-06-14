import Axios from 'axios';

const BASE_URL = `https://covid19.mathdro.id/api`;

const fetchData = async (url = BASE_URL) => {
  try {
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await Axios.get(url);

    return {confirmed, recovered, deaths, lastUpdate};
  } catch (error) {
    throw error;
  }
};

export default fetchData;