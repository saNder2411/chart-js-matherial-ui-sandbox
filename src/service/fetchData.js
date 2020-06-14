import Axios from 'axios';

const BASE_URL = `https://covid19.mathdro.id/api`;

const fetchData = async (url = BASE_URL) => {
  try {
    const response = await Axios.get(url);

    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchData;