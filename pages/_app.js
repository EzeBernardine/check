import {ThemeProvider} from "styled-components";
import {ProviderContext, UseContext} from "../lib/context";
import {theme} from "../config/theme";
import "../styles/globals.css";
import Cookies from 'js-cookie'
import {useRouter} from "next/router";
import {auth} from '../actions/auth'
import App from "next/app";
import Head from 'next/head'
import {useEffect} from "react";
import qs from "query-string";
import Layout from '../components/Layout'
import { redirectToLogin } from '../lib/utils'


function MyApp({Component, pageProps, ...rest}) {
    const router = useRouter();

    console.log("Version: 14", process.env);
    const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
    for (let key in router.query) {
        // Cookies.set(key, router.query[key], {expires: inFiveMinutes})
        Cookies.set(key, router.query[key], {expires: 1})
    }
    // Cookies.set("clientId", router.query["client-id"])
    return (
        <>
            <ThemeProvider theme={theme}>
                <ProviderContext>
                    <Layout>
                        <Component {...pageProps} {...rest} />
                    </Layout>
                </ProviderContext>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const baseURL = process.env.BASE_ENDPOINT;
    const authURL = process.env.AUTH_URL;
    return {...appProps, authURL, baseURL};
};
