import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { BACKEND_BASE } from '../utils/config';
import { store } from '../state';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducer';

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE
});

axiosInstance.interceptors.request.use((config) => {
  // const { currentUser } = store.getState()
  const { user } = useSelector((state: RootState) => state.currentUser)
  if (user) {
    config.headers.Authorization = `Bearer ${user?.accessToken}`;
  }
  console.log('Axios Request', config);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Axios Response', response);
    return response;
  },
  (error) => {
    // console.log('error', error);
    return Promise.reject(error);
  }
);

const get = <T>(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> => from(axiosInstance.get<T>(url, config));

const post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> => from(axiosInstance.post<T>(url, data, config));

const put = <T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> => from(axiosInstance.put<T>(url, data, config))

export default { get, post, put };
