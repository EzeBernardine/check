import {ThemeProvider} from "styled-components";
import {ProviderContext} from "../lib/context";
import {theme} from "../config/theme";
import "../styles/globals.css";
import  Cookies from 'js-cookie'
import {useRouter} from "next/router";
import App from "next/app";

function MyApp({Component, pageProps, ...rest}) {

    console.log("Pp", rest);
    // const router = useRouter();

    // router.query.clientId = router.query["client-id"];
    // console.log("router", router.query);
    // // if (!router.query.clientId) return router.push("/404");
    //
    // for (let key in router.query){
    //     Cookies.set(key, router.query[key])
    // }
    // Cookies.set("clientId", router.query["client-id"])
    return (
        <ThemeProvider theme={theme}>
            <ProviderContext>
                <Component {...pageProps} {...rest} />
            </ProviderContext>
        </ThemeProvider>
    );
}

export default MyApp;
MyApp.getInitialProps = async (appContext: any) => {
    const appProps = await App.getInitialProps(appContext);
    const baseURL: any = process.env.BASE_ENDPOINT;
    const authURL: any = process.env.AUTH_URL;
    const clientExtension: any = process.env.CLIENT_EXTENSION;
    const stagingSuffix: any = process.env.STAGING_SUFFIX;

    return { ...appProps, authURL, baseURL, clientExtension, stagingSuffix };
};
