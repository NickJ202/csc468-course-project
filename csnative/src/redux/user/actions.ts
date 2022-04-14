import { Dispatch } from 'redux';

import * as C from './constants';

import { register, verify } from '../services/userServices';

import { UserType, UserVerify } from '../types';

export const savePartialUser = (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    oauthToken: string,
    verificationCode: string,
) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: C.SAVE_PARTIAL_USER,
            payload: {
                'email': email,
                'password': password,
                'firstName': firstName,
                'lastName': lastName,
                'phoneNumber': phoneNumber,
                'oauthToken': oauthToken,
                'verificationCode': verificationCode
            }
        })
    }
}

// We don't need to update any user state on return at the moment
// but may need to in the future, this is an example of doing an
// async call to the backend in redux, you will need this often.
export const registerUser = (user: UserType) => {
    return (dispatch: Dispatch) => {
        register(user).then(
            _response => {
                dispatch({
                    type: C.REGISTER_USER_SUCCESS,
                    payload: {}
                })
            },
            _error => {
                dispatch({
                    type: C.REGISTER_USER_FAILURE,
                    payload: {}
                })
            }
        );
    }
}

export const verifyUser = (user: UserVerify) => {
    return (dispatch: Dispatch) => {
        verify(user).then(
            _response => {
                dispatch({
                    type: C.VERIFY_USER_SUCCESS,
                    payload: user
                })
            },
            _error => {
                dispatch({
                    type: C.VERIFY_USER_FAILURE,
                    payload: {}
                })
            }
        );
    }
}