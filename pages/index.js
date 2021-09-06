import Landing from "../screens/Landing";
import Layout from "../components/Layout";
import App from "next/app";
import MyApp from "./_app";

export default function Home(props) {
    return (
        <div>
            <Layout>
                <Landing {...props} />
            </Layout>
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const baseURL = process.env.BASE_ENDPOINT;
    const authURL = process.env.AUTH_URL;


    return {
        props: {baseURL, authURL}
    };
};
