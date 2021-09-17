import { useEffect } from "react";
import { UseContext } from "../../lib/context";
import Header from "../Header";
import { Container, Main } from "./styles";
import Head from 'next/head'
import { usePortalsConfig } from '../../config/portals'



const Layout = ({ children }) => {

    const { setPortalConfig } = UseContext()
    const {  configuration } = usePortalsConfig();

    console.log(configuration)

 
    useEffect(() => {
        setPortalConfig({
            fontFamily: configuration?.font?.name,
            linkColor: configuration?.colorPalette?.linkColor,
            mainColor: configuration?.colorPalette?.mainColor
        })
      }, [configuration]);

      
  return (
    <Container fontFamily={configuration?.font?.name}>
        <Head>
            <link rel="preconnect" href={ configuration?.font?.value} />
            <title>Disbursement</title>
        </Head>
        
        <Header  />

        <Main linkColor={ configuration?.colorPalette?.linkColor}>{children}</Main>
    </Container>
  );
};
export default Layout;
