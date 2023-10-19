import { getAuth } from 'firebase/auth';

const getTokenId = async () => {
  let userToken = '';
  try {
    const response = await getAuth().currentUser.getIdTokenResult();
    const { token } = response;
    userToken = token;
  } catch (error) {
    throw error;
  }
  return userToken;
};

export { getTokenId };
