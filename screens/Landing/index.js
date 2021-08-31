import { Container, _Span } from "./styles";
import Cash from "./Cash";
import Cookies from "js-cookie";
import OtherItems from "./OtherItems";
import Tabs from "../../components/Tabs";
import {getClientLedgers } from '../../actions/billing'
import {Alert, Spinner} from "kodobe-react-components";
import { useEffect, useState } from "react";
import { generateID } from "../../lib/generateID";

const Header = (props) => {
    const [clientLedgers, setCLientLedgers] = useState([])
    const [clientLedger, setCLientLedger] = useState([])


    useEffect(() => {
        const  handleGetClientLedgers = async () => {
            const {data, error} = await getClientLedgers(props?.baseURL)
            if(data){
                setCLientLedgers(data?._embedded?.clientLedgers)
            }
            if(error){
                Alert.showError({content: error});
            }
        }
        handleGetClientLedgers()
    }, [])

   

  return (
    <Container>
      <Tabs
        click={(tab) => setCLientLedger(tab)}
        nonActiveColor={"#063159"}
        activeColor={"white"}
        bgColor={"transaparent"}
        full
      >
        {/* <div label="Cash" value=''>
          <Cash {...props}  ledgerId={ledgerId}  />
        </div> */}

        {
          clientLedgers?.length ?  clientLedgers?.map(ledger => (
                    <div label={ledger?.name} value={ledger} key={generateID(16)}>
                         <Cash {...props} clientLedger={clientLedger}  />
                    </div> 
                )
            )
            : null
        }

        <div label="Other Items" value=''>
          <OtherItems {...props}  />
        </div>
      </Tabs>
    </Container>
  );
};
export default Header;
