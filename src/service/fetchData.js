import Axios from 'axios';

const URL = `https://covid19.mathdro.id/api `;

const fetchData = async (url = URL) => {
  try {
    const response = await Axios.get(url);

    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchData;