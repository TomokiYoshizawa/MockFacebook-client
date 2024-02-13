import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL.replace(/\/+$/, "");

export const loginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(`${SERVER_URL}/auth/login`, user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};
