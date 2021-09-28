import Landing from "../screens/Landing";
import withAuth from "../components/withAuth";








const Home = (props) => {

    return (
        <div>
            <Landing {...props}  />
        </div>
    );
}


export default withAuth(Home);

export const getServerSideProps = async (ctx) => {
    const baseURL = process.env.BASE_ENDPOINT;
    const authURL = process.env.AUTH_URL;

    return {
        props: {baseURL, authURL}
    };
};
