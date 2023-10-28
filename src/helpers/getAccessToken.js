import { getAuth } from 'firebase/auth';

const getAccessToken = async () => {
  let userToken = '';
  try {
    const response = await getAuth().currentUser;
    const { accessToken } = response;
    userToken = accessToken;
  } catch (error) {
    throw error;
  }
  return userToken;
};

export { getAccessToken };
