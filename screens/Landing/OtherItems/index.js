import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import {Button, Container, Container4} from "./styles";
import {Header1, Span} from "../../../components/Font/styles";
import {theme} from "../../../config/theme";
import {Alert, Spinner} from "kodobe-react-components";
import {Spacer} from "../../../components/Spacer/styles";
import {Flex, Frame, Grid} from "../../../components/Box/styles";
import * as invoicingAction from "../../../actions/invoice";
import Modal from '../../../components/Modal'


const OtherItems = (props) => {
    const [loading, setLoading] = useState(true);
    const [invoices, setInvoices] = useState([]);
    const [invoiceId, setInvoiceId] = useState('');
    let userId = Cookies.get("userId");
    const user = Cookies.get("user") && JSON.parse(Cookies.get("user"));
    if (!userId) {
        userId = user?.userId
    }

    useEffect(() => {
        const getInvoices = async () => {
            setLoading(true)
            const {error, data} = await invoicingAction.getInvoices(props.baseURL, userId)
            if (error) return Alert.showError({content: error});
            setInvoices(data.data)
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
                Gifts
            </Header1>

            <Modal show={invoiceId?.length > 0} title='Redemption Code' handleClose={() => setInvoiceId('')}>
                <Flex direction='column'>
                    <Span
                        color={["grey", "0", theme]}
                        size="font28"
                        lineHeight="lineHeight30"
                        weight="fontWeightMedium"
                        fontFamily="sagoe"
                        center
                    >
                        {invoiceId}4
                        54
                    </Span>
                    <Spacer height='10px'/>
                    <Span
                        color={["grey", "0", theme]}
                        size="font14"
                        lineHeight="lineHeight19"
                        weight="fontWeightMedium"
                        fontFamily="sagoe"
                        center
                    >
                        Congratulations! You have won a laptop. To redeem your prize, send your full details to dkusimo@jobberman.com and visit the Jobberman head office to collect your prize. Don’t forget to tell your friends to complete the FREE soft skills training and WIN BIG! Start here http://Jobberman.com/softskills
                    </Span>
                
                </Flex>
            </Modal>

            <Spacer height="30px"></Spacer>

            <div>
                <Grid gap="20px">
                    {invoices?.length ? invoices.map((invoice) => (
                        <Container4 justifyContent="space-between" key={invoice.id}>
                            <Flex width="auto" alignItems="center" justifyContent='flex-start' wrap='nowrap'>
                                <Frame
                                    height='50px'
                                    width='50px'
                                    object='contain'
                                >
                                    <img src={invoice?.products?.[0]?.image || invoice?.product?.image} alt=''/>
                                </Frame>
                                <Flex direction='column' alignItems='flex-start' pad='0 0 0 10px'>
                                    <Span
                                        color={["grey", "0", theme]}
                                        size="font16"
                                        lineHeight="lineHeight16"
                                        weight="fontWeightMedium"
                                        fontFamily="sagoe"
                                    >
                                        {invoice?.products?.[0]?.name}
                                    </Span>
                                    <Button
                                        text={"Submit"}
                                        className='redemptionCode'
                                        type="button"
                                        onClick={() => setInvoiceId(invoice?.redemptionCode?.toUpperCase())}>
                                        See Redemption Code
                                    </Button>
                                </Flex>
                            </Flex>

                            <Flex width="auto">
                                {
                                    invoice?.status === 'PAID' ?
                                        <Button text={"Submit"} type="button" onClick={() => []}>
                                            Completed
                                        </Button>
                                        : invoice?.status === 'UNPAID' ?
                                            <Button text={"Submit"} className='unpaid' type="button" onClick={() => []}>
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
