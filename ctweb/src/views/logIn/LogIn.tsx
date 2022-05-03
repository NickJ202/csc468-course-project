import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { LogIn } from "../../components/organisms/LogIn"

import * as http from "../../http-services";
import * as CF from "../../config";
import * as U from "../../urls";
import { language } from '../../language';

import { setAuth } from "../../redux/auth/actions";

export default function LogInView() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);

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
            history.push(U.events);
        }).catch((error) => {
            setError(error.response ?
                error.response.data['non_field_errors'][0] : language.errorOccurred
            );
        });
    }

    React.useEffect(() => {
        return () => {
            setLoading(false);
        }
    }, [])

    return <LogIn
        loading={loading}
        handleSubmit={(email: string, password: string) => handleSubmit(email, password)}
        error={error}
    />

}