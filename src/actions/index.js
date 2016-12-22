export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const logIn = (token) => {
  localStorage.setItem('token', token);
  return {
    type: AUTH_LOGIN,
  };
};

export const logOut = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_LOGOUT,
  };
};
