import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL; 

export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/users/register`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const login = async ({ email, password }) => {
  console.log(`Logging in with email: ${email}, password: ${password}`);
  try {
    const { data } = await axios.post(`${BASE_URL}/api/users/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${BASE_URL}/api/users/profile`, config);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateProfile = async ({ token, userData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(`${BASE_URL}/api/users/updateProfile`, userData, config);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateProfilePicture = async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(`${BASE_URL}/api/users/updateProfilePicture`, formData, config);
    return data;
  } catch (error) {
    handleError(error);
  }
};

// Error handling function
const handleError = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    throw new Error(error.response.data.message);
  }
  throw new Error("An unexpected error occurred");
};
