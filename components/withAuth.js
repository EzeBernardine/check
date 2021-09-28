import React, {useEffect, useState} from "react";
import {Spinner} from "kodobe-react-components";
import Cookies from "js-cookie"
import {useRouter} from "next/router";
import {getAuthenticationToken, getClientId} from "../lib/localStorage";
import * as userAction from "../actions/user"
import { redirectToLogin } from '../lib/utils'

const withAuth = (AuthComponent) => {
    const Wrapper = (props) => {
        // console.log("In Auth", props)
        const {baseURL, authURL} = props

        const {query, ...router} = useRouter()
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            checkIfUserAuth();

        }, []);

        const checkIfUserAuth = async () => {
            const token = getAuthenticationToken();
            if (!token) {
                redirectToLogin(authURL)
            }

            const {error, data} = await userAction.me(baseURL);

            
            if (error) {

                Cookies.remove("auth-token")
                let url = `${authURL}?clientId=${query["client-id"] || query.clientId}`;

                if (query.phoneNumber) {
                    url += `&type=phoneNumber&phoneNumber=${query.phoneNumber}`
                }

                url += `&redirect=${window.location.origin + window.location.pathname}`

                // console.log("URLLL", url, router.query);
                // return;
                return router.push(url)
            }

            Cookies.set("user", JSON.stringify(data))
            Cookies.set("userId", data.userId);
            setLoading(false);
        };

        if (loading) {
            return (
                <div className="center">
                    <Spinner/>
                </div>
            );
        }

        return <AuthComponent {...props} />;
    };
    return Wrapper;
};

export default withAuth;
