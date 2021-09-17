import Landing from "../screens/Landing";
import Layout from "../components/Layout";







export default function Home(props) {

    return (
        <div>
            <>
                <Landing {...props}  />
            </>
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const baseURL = process.env.BASE_ENDPOINT;
    const authURL = process.env.AUTH_URL;
    console.log("AppP", authURL, baseURL)

    return {
        props: {baseURL, authURL}
    };
};
