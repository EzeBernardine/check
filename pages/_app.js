import {ThemeProvider} from "styled-components";
import {ProviderContext} from "../lib/context";
import {theme} from "../config/theme";
import "../styles/globals.css";
import  Cookies from 'js-cookie'
import {useRouter} from "next/router";
import{auth} from '../actions/auth'
import App from "next/app";
import {useEffect} from "react";
import qs from "query-string";
import { redirectToLogin } from '../lib/utils'


function MyApp({Component, pageProps, ...rest}) {
    const router = useRouter();
    const {baseURL, authURL} = rest

    // useEffect(() => {
        // console.log("Here", router);
        // if (!router.query.clientId && router.pathname !== "/404") {
        //     // window.location.href = window.location.origin + "/404";
        //     return router.push("/404");
        // }
    // }, [])

    console.log("Version: 13", process.env);
    const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
    for (let key in router.query){
        Cookies.set(key, router.query[key], {expires: inFiveMinutes})
    }
    Cookies.set("clientId", router.query["client-id"])

    useEffect(() => {
        // getClientInfo();
      }, []);

      const getClientInfo = async () => {
        const tokenStore = "KCLI_token";
        const query = qs.parse(window.location.search);
          if (!query["auth-token"]) {
              let localData = localStorage.getItem(tokenStore);
              console.log(localData, 'localData')
              if (!localData) {
              redirectToLogin(authURL);
              return;
              }

          }
            // check if token is still valid
            const {data, error} = await auth(baseURL)
            .catch((err) => redirectToLogin(authUrl));

        }

    return (
        <ThemeProvider theme={theme}>
            <ProviderContext>
                <Component {...pageProps} {...rest} />
            </ProviderContext>
        </ThemeProvider>
    );
}

export default MyApp;
MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const baseURL = process.env.BASE_ENDPOINT;
    const authURL = process.env.AUTH_URL;
    return { ...appProps, authURL, baseURL };
};
