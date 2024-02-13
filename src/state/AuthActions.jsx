/* eslint-disable no-unused-vars */
//Set actions based on the user's authentication status
export const LoginStart = (user) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});
