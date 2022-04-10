import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LogIn } from "../../components/organisms/LogIn"

import * as http from "../../http-services";
import * as CF from "../../config";

import { setAuth } from "../../redux/auth/actions";
import { RootState } from "../../redux/store";

export default function LogInView() {
    const dispatch = useDispatch();
    const authData = useSelector(
        (state: RootState) => state.authReducer
    );
    const [loading, setLoading] = React.useState<boolean>(false);

    async function handleSubmit(email: string, password: string) {
        setLoading(true);
        await http.post(CF.TOKEN_ENDPOINT, {
            username: email,
            password: password
        }).then((response) => {
            dispatch(setAuth(
                {
                    token: response.data.token,
                    userId: response.data.userId,
                    email: response.data.email
                }
            ));
            
        }).catch((error) => {
            console.log(error)
        });
        setLoading(false);
    }

    console.log(authData.token);

    return <LogIn
        loading={loading}
        handleSubmit={(email: string, password: string) => handleSubmit(email, password)}
    />

}