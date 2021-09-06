import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Container, Container3, Container4, Button } from "./styles";
import {Header1, Small, Span, Header3} from "../../../components/Font/styles";
import withAuth from "../../../components/withAuth";
import {theme} from "../../../config/theme";
import {Alert, Spinner} from "kodobe-react-components";
import {Spacer} from "../../../components/Spacer/styles";
import {Flex, Frame, Grid} from "../../../components/Box/styles";
import { generateID } from "../../../lib/generateID";
import * as invoicingAction from "../../../actions/invoice";
import Modal from '../../../components/Modal'



const OtherItems = (props) => {
    const [loading, setLoading] = useState(true);
    const [invoices, setInvoices] = useState([]);
    const [invoiceId, setInvoiceId] = useState('');
    let userId = Cookies.get("userId");
    const user = Cookies.get("user") && JSON.parse(Cookies.get("user"));
    if(!userId){
        userId = user?.userId
    }

    useEffect(() => {
        const getInvoices = async () => {
            setLoading(true)
            const {error, data} = await invoicingAction.getInvoices(props.baseURL,  userId)
            if (error) return Alert.showError({content: error});
            setInvoices(data.data)
            console.log("getInvoices", error, data.data);
            setLoading(false)
    
        };
        getInvoices().catch(console.error);
    }, [])
 

    if (loading) {
        return (
            <Flex className="center">
                <Spinner/>
            </Flex>
        );
    }

    return (
        <Container>
            <Header1
                color={["grey", "0", theme]}
                size="font20"
                lineHeight="lineHeight56"
                weight="fontWeightNormal"
                fontFamily="sagoeBold"
            >
                Other Items
            </Header1>

            <Modal show={invoiceId} title='Redemption Code' handleClose={() => setInvoiceId(null)}>
               <Flex>
               <Span
                    color={["grey", "0", theme]}
                    size="font16"
                    lineHeight="lineHeight16"
                    weight="fontWeightMedium"
                    fontFamily="sagoe"
                    center
                >
                    {invoiceId}
                </Span>
               </Flex>
            </Modal>

            <Spacer height="30px"></Spacer>

            <div>
                <Grid gap="20px">
                    {invoices.length? invoices.map((otherItem) => (
                        <Container4 justifyContent="space-between" key={generateID(16)} >
                            <Flex  width="auto" alignItems="center" justifyContent='flex-start' wrap='nowrap'>
                                <Frame
                                    height='50px'
                                    width='50px'
                                    object='contain'
                                >
                                  <img src={otherItem?.product?.image } alt=''/>
                                </Frame>
                                <Flex direction='column' alignItems='flex-start' pad='0 0 0 10px'>
                                    <Span
                                        color={["grey", "0", theme]}
                                        size="font16"
                                        lineHeight="lineHeight16"
                                        weight="fontWeightMedium"
                                        fontFamily="sagoe"
                                    >
                                        {otherItem?.product?.description}
                                    </Span>
                                    <Button
                                        text={"Submit"}
                                        className='redemptionCode'
                                        type="button"
                                        onClick={() => setInvoiceId(otherItem?.id)}                                    >
                                        See Redemption Code
                                    </Button>
                                </Flex>
                            </Flex>

                            <Flex width="auto">
                                {
                                    otherItem?.status === 'PAID' ?
                                    <Button
                                        text={"Submit"}
                                        type="button"
                                        onClick={() => []}
                                    >
                                        Completed
                                    </Button>
                                    : otherItem?.status === 'UNPAID' ?
                                    <Button
                                        text={"Submit"} 
                                        className='unpaid'
                                        type="button"
                                        onClick={() => []}
                                    >
                                    Pending
                                    </Button>
                                : null
                                }
                            </Flex>
                        </Container4>
                    )) : <span>No data found!</span>
                    }
                </Grid>
            </div>
        </Container>
    );
};
// export default withAuth(OtherItems);
export default OtherItems;
