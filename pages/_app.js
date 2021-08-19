import {ThemeProvider} from "styled-components";
import {ProviderContext} from "../lib/context";
import {theme} from "../config/theme";
import "../styles/globals.css";
import  Cookies from 'js-cookie'
import {useRouter} from "next/router";
import App from "next/app";

function MyApp({Component, pageProps, ...rest}) {
    const router = useRouter();

    router.query.clientId = router.query["client-id"];
    console.log("router", router.query);
    // if (!router.query.clientId) return router.push("/404");

    const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
    for (let key in router.query){
        Cookies.set(key, router.query[key], {expires: 1})
    }
    Cookies.set("clientId", router.query["client-id"])

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
    const clientExtension = process.env.CLIENT_EXTENSION;
    const stagingSuffix = process.env.STAGING_SUFFIX;

    return { ...appProps, authURL, baseURL, clientExtension, stagingSuffix };
};
