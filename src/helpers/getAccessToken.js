import { getAuth } from 'firebase/auth';
import { getResponse } from './getResponse';

const getAccessToken = async () => {
  try {
    const response = getAuth().currentUser;
    const { accessToken } = response;
    return accessToken;
  } catch (err) {
    getResponse('error', err.message);
  }
};

export { getAccessToken };
