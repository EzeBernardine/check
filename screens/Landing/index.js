import { Container, _Span } from "./styles";
import Cash from "./Cash";
import Cookies from "js-cookie";
import OtherItems from "./OtherItems";
import Tabs from "../../components/Tabs";
import {getClientLedgers } from '../../actions/billing'
import {Alert, Spinner} from "kodobe-react-components";
import { useEffect, useState } from "react";
import { generateID } from "../../lib/generateID";
import { Flex } from "../../components/Box/styles";

const Header = (props) => {
    const [clientLedgers, setCLientLedgers] = useState([])
    const [clientLedger, setCLientLedger] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const  handleGetClientLedgers = async () => {
            setLoading(true)
            const {data, error} = await getClientLedgers(props?.baseURL)
            if(data) setCLientLedgers(data?._embedded?.clientLedgers);
            if(error) Alert.showError({content: error});
            setLoading(false)
        }
        handleGetClientLedgers()
    }, [])

   

  return (
    <Container>
         {
            loading ? 
                <Flex style={{minWidth: '100%'}}><Spinner /> </Flex>   
             :
                clientLedgers?.length ?  
                    <Tabs
                        click={(tab) => setCLientLedger(tab)}
                        nonActiveColor={"#063159"}
                        activeColor={"white"}
                        bgColor={"transaparent"}
                        full
                    >
                        {
                            clientLedgers?.map(ledger => (
                                    <div label={ledger?.name} value={ledger} key={generateID(16)}>
                                        <Cash {...props} clientLedger={clientLedger}  />
                                    </div> 
                                )
                            )
                        }
                
                        <div label="Other Items" value=''>
                            <OtherItems {...props}  />
                        </div>
                    </Tabs>
                :
                    <div label="Other Items" value=''>
                        <OtherItems {...props}  />
                    </div>
        }


  
    </Container>
  );
};
export default Header;
