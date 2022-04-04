import axios from './axios';

export const postApi = async (url, data, navigate_url, navigate) => {
  try {
    const response = await axios.post(url, data);
    console.log('inside response is', response);
    if (navigate_url) {
      if (response.data.length) {
        //   toast.success(response.data[0]);
      } else {
        //   toast.success(response.data);
      }
      navigate(navigate_url);
      return;
    }
    if (response.status === 200) {
      const {data} = response.data;
      return response.data;
    }
  } catch (error) {
    if (error.response.data.length) {
      //   toast.warn(error.response.data[0]);
    } else {
      //   toast.warn(error.response.data);
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
