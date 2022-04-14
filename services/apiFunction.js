import axios from './axios';

export const postApi = async (url, data, token) => {
  try {
    let response;
    if (token) {
      response = await axios.post(url, data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } else {
      response = await axios.post(url, data);
    }
    console.log('inside response is', response);
    if (response.status === 200) {
      if (response.data) {
        return response.data;
      } else {
        return response;
      }
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
};

export const getApi = async (url, token) => {
  try {
    if (token) {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if (response.status === 200) {
        return response?.data;
      }
    } else {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response?.data;
      }
    }
  } catch (error) {
    return error;
  }
};
