import { getAuth } from 'firebase/auth';

const getAccessToken = async () => {
  try {
    const response = getAuth().currentUser;
    const { accessToken } = response;
    return accessToken;
  } catch (error) {
    throw error;
  }
};

export { getAccessToken };
