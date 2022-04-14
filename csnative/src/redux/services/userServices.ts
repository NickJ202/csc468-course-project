import axios from 'axios';

import {OAUTH_REG_URL, OAUTH_VERIFY_URL} from './constants';

import {UserForBackend, UserType, UserVerify} from '../types';

const headersIn = {
    'Content-Type': 'application/x-www-form-urlencoded',
};

// Apparently this needs to be done to send regular forms to backend
function getQueryString(data: UserForBackend) {
    return Object.entries(data)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

export function register(user: UserType): Promise<any> {
    const userSend: UserForBackend = {
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        password: user.password,
        phone_number: user.phoneNumber,
        oauth_client_id: 'cgauth' // Send status back from auth - cant see current return type from Rocket
    }

    return axios.post(
        OAUTH_REG_URL,
        userSend,
        {headers: headersIn, transformRequest: getQueryString}
    )
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(error);
        });
}

export function verify(ver: UserVerify): Promise<any> {
    return axios.post(
        OAUTH_VERIFY_URL,
        ver,
        {headers: headersIn, transformRequest: getQueryString}
    )
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(error);
        });
}