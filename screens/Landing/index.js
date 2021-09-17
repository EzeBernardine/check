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
import { UseContext } from "../../lib/context";

const Header = (props) => {
    const [clientLedgers, setClientLedgers] = useState([])
    const [clientLedger, setClientLedger] = useState([])
    const [loading, setLoading] = useState(true)


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
      <Tabs
        click={(tab) => setClientLedger(tab)}
        nonActiveColor={"#063159"}
        activeColor={"white"}
        bgColor={"transaparent"}
        full
      >
        {
            loading ?
            <div label="Loading..." value=''>
                <Spinner />
            </div> :
            clientLedgers?.length ?  clientLedgers?.map(ledger => (
                    <div label={ledger?.name} value={ledger} key={ledger.id}>
                         <Cash {...props} clientLedger={clientLedger}  />
                    </div>
                )
            )
            : null
        }


  
    </Container>
  );
};
export default Header;
