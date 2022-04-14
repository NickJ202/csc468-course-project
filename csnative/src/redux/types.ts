export type UserType = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    oauthToken: string;
    verificationCode: string;
}

export type UserState = UserType;

export type SavePartialUserAction = {
    type: string;
    payload: UserType;
}

export type UserAction = SavePartialUserAction;


// Transfer classes - TODO have a camel case conversion function
export interface UserForBackend {
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    phone_number: string,
    oauth_client_id: string
};

export interface UserVerify {
    email: string,
    activation_code: string,
}