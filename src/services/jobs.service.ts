import axios from 'axios';
import { IJob } from '../types';

const API_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy';

const getJobs = async (): Promise<IJob[]> => {
  const { data } = await axios.get<IJob[]>(`${API_URL}/data`, {
    params: {
      access_token: process.env.REACT_APP_API_KEY,
    },
  });

  return data;
};

export { getJobs };
