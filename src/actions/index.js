export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const signIn = (token) => {
  localStorage.setItem('token', token);
  return {
    type: AUTH_SIGNIN,
  };
};

export const logOut = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_LOGOUT,
  };
};
