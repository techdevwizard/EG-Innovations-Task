import axios from 'axios';
import type { Credentials, LoginResponse } from '../interfaces/user';
import ImportedURL from '../config/CommonApi';
import { errorToaster, successToaster } from '../utils/swal';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';
export const LOG_OUT = 'LOG_OUT'

export function loginUser(credentials: Credentials) {
    return function (dispatch: (action: { type: string; payload: any }) => void) {
        return axios.post(ImportedURL.API.adminlogin, credentials)
            .then((res) => {
                const { token, name } = res.data;
                localStorage.setItem('token', token);
                dispatch({
                    type: LOGIN_USER,
                    payload: { token, name },
                });
                successToaster('Logged in successfully!')
            }).catch((error: any) => {
                dispatch({
                    type: '',
                    payload: {},
                });

                const message = error?.response?.data?.message || 'Something went wrong. Please try again.';
                errorToaster(message); // ✅ Show error
            })
    };
}
export function getUser() {
    return function (dispatch: (action: { type: string; payload: any }) => void) {
        return axios.get(ImportedURL.API.adminprofile)
            .then((res) => {
                const { name } = res.data;
                dispatch({
                    type: GET_USER,
                    payload: name,
                });
            })

    };
}

export function logOut() {
    return function (dispatch: (action: { type: string; payload: any }) => void) {
        localStorage.removeItem('token');
        dispatch({
            type: LOG_OUT,
            payload: {}
        });
    };
}
