/* eslint-disable no-param-reassign */
import axios from 'axios';
import API_ENDPOINTS from '../const/ApiEndPoints';
import ToastMessage from '@/components/common/toast-message';

const DELAY_LOADER = 400;
const UNAUTHORIZED_RESPONSE_CODE = 401;

/**
 * @function refreshAccessToken
 * @description Refresh access token
 * @param {string} refreshToken - Refresh token
 * @returns {Promise<object>} - Axios promise
 */
const refreshAccessToken = (refreshToken: string) => {
  return axios.post(`${API_ENDPOINTS.MODULE_BASE_URL.AUTH}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`, {
    refresh: refreshToken,
  });
};

export const initializeAxios = () => {
  const showLoaderEvent = new Event('showLoader', { bubbles: true });
  const hideLoaderEvent = new Event('hideLoader', { bubbles: true });

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.clear();
    window.location.reload(); // Reload the page after logging out
  };

  let numberOfApiCallsPending = 0;

  const headersCommonOptions = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  };

  axios.defaults.headers.common = headersCommonOptions;

  axios.interceptors.request.use((req) => {
    numberOfApiCallsPending += 1;

    if (req.loader !== false) {
      document.dispatchEvent(showLoaderEvent);
    }

    const token = localStorage.getItem('access_token');
    if (
      token &&
      API_ENDPOINTS.HOSTS_NEEDS_TOKEN.includes(new URL(req.url).host.split(':')[0])
    ) {
      req.headers.authorization = `JWT ${token}`;
    }

    if (API_ENDPOINTS.HOSTS_NEEDS_TOKEN.includes(new URL(req.url).host.split(':')[0])) {
      req.headers.org = process.env.NEXT_PUBLIC_ENV;
    }

    return req;
  });

  axios.interceptors.response.use(
    (response) => {
      numberOfApiCallsPending -= 1;
      if (numberOfApiCallsPending === 0) {
        setTimeout(() => {
          document.dispatchEvent(hideLoaderEvent);
        }, DELAY_LOADER);
      }
      return response;
    },
    async (error) => {
      numberOfApiCallsPending -= 1;
      if (numberOfApiCallsPending === 0) {
        setTimeout(() => {
          document.dispatchEvent(hideLoaderEvent);
        }, DELAY_LOADER);
      }

      // Handle refresh token logic
      if (error.config.url === `${API_ENDPOINTS.MODULE_BASE_URL.AUTH}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`) {
        logout();
        return Promise.reject(error);
      }

      if (
        error.response?.status === UNAUTHORIZED_RESPONSE_CODE &&
        !error?.config?.retry
      ) {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          ToastMessage({
            icon: 'info',
            title:
              'Please wait, your token might have expired. We are trying to refresh the token and resend the request.',
          });
        } else {
          logout();
          return Promise.reject(error);
        }

        error.config.retry = true;
        const res = await refreshAccessToken(refreshToken);
        if (res?.data?.refresh && res?.data?.access) {
            
          ToastMessage({
            icon: 'success',
            title: 'Token refreshed successfully. Resending API requests.',
          });
          localStorage.setItem('refresh_token', res?.data?.refresh);
          localStorage.setItem('access_token', res?.data?.access);
          return axios.request(error.config);
        }

        ToastMessage({
          icon: 'error',
          title: 'Failed to refresh the token. Invalid API response.',
        });
        logout();
        return Promise.reject(error);
      }

      // Handle other errors
      let title = error?.response?.data?.msg
        ? typeof error.response.data.msg === 'string'
          ? error.response.data.msg
          : JSON.stringify(error.response.data.msg)
        : error.message;

      ToastMessage({
        icon: 'error',
        title,
      });

      return Promise.reject(error);
    },
  );
};

export default initializeAxios;
