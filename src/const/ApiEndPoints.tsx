const API_ENDPOINTS = {
  HOSTS_NEEDS_TOKEN: [process.env.REACT_APP_HOSTS_NEEDS_TOKEN],
  MODULE_BASE_URL: {
    AUTH: process.env.NEXT_PUBLIC_BASE_URL,
  },
  USER_PROFILE: {
    USER_PROFILE: 'profile/',
  },
  AUTH: {
    LOGIN_USER: 'user/login/',
    LOGOUT_USER: 'logout/',
    CREATE_USER: 'user/register',
    GET_ACCESS_TOKEN: 'token/',
    REFRESH_TOKEN: 'api/token/refresh/',
    USER_PERMISSIONS: 'api/permissions/',
    FORGET_PASSWORD: 'password-reset/',
    CHANGE_PASSWORD: 'password-change/',
  },
};
export default API_ENDPOINTS;
