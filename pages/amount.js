import _Airtime from "../screens/Airtime";
import Layout from "../components/Layout";
import {Container1, Container2, FieldWrap, FormContainer, Label} from "../screens/Airtime/styles";
import {Header3} from "../components/Font/styles";
import {theme} from "../config/theme";
import {Spacer} from "../components/Spacer/styles";
import {Grid} from "../components/Box/styles";
import Button from "../components/Button";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import { usePaystackPayment } from "react-paystack";
import * as tpsAction from "../actions/tps";
import {Alert} from "kodobe-react-components";
 import {createInvoices} from '../actions/invoice'
 import {initializePaystack} from '../actions/payment'
 
import Nav from '../components/Nav'
 

export default function Amount({baseURL}) {
    const [loading, setLoading] = useState(false);
    const [initiate, setInitiate] = useState(false);
    let userId = Cookies.get("userId");
    const [paymentData, setPaymentData] = useState({
        email: `micheal@kodobe.com`,
        redirectUrl: "https://google.com",
        reference: "",
        amount: '',
        publicKey: "pk_test_f5e62f12e5061b9f3b49d5411cf7b335bdf3e65c",
      });
 
    const handleCreateInvoice = async (invoice) => {
        setLoading(true);
        setInitiate(false);
        const {data, error} = await createInvoices(baseURL, invoice)
        if(error)return Alert.showError({content: error})
        if(data) {
            setPaymentData( {...paymentData, invoiceId: data.data.id });
        }
    };

    useEffect(() => {
        const handelPayStackPayment = async () => {
            setLoading(true);
            setInitiate(false);
            const {data, error} = await initializePaystack(baseURL, paymentData)
            if(error)return Alert.showError({content: error})
            if(data) {
                setPaymentData({ ...paymentData, reference: data.data.reference, invoiceId:'' });
                setInitiate(true);
            }
        }
        paymentData.invoiceId && paymentData.amount &&   handelPayStackPayment();
      }, [paymentData.amount, paymentData.invoiceId]);
    

    const initializePayment = usePaystackPayment({ ...paymentData });

    useEffect(() => {
        const onSuccess = () => Alert.showSuccess({content: "TopUp Successfull!"})
        const onClose = () => console.log("Closed")

        if (initiate && paymentData.amount &&  paymentData.reference.length) {
            initializePayment(onSuccess, onClose);
            setLoading(false)
            setInitiate(false)
            setPaymentData({ ...paymentData, reference: '', amount: '', invoiceId:'' });

        }
      }, [initiate, paymentData.amount, paymentData.reference]);

    return (
        <Layout>
            <Container1>
                <Nav navItems={[{name: 'Home /', href: '/'}, {name: 'Cashout', href: '/cashout'} ]}/>


                <Container2>
                    <Header3
                        color={["grey", "0", theme]}
                        size="font18"
                        lineHeight="lineHeight56"
                        weight="fontWeightNormal"
                        fontFamily="sagoeBold"
                    >
                      Enter Amount
                    </Header3>
                    <Spacer height="50px"></Spacer>
                    <FormContainer height="auto" justifyContent="flex-start">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleCreateInvoice({
                                // productId: item.id,
                                userId: userId,
                                amount: paymentData.amount / 100,
                                validity: 3,
                                type: "one-off",
                            })
                        }
                        }>
                            <Grid gap="19px">
                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="phoneNumber">Enter Amount</Label>
                                        <FieldWrap>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                value={paymentData.amount}
                                                onChange={(e) => setPaymentData({...paymentData, amount: e.target.value}) }
                                            />
                                        </FieldWrap>
                                    </Grid>
                                </div>


                                <Button
                                    text={"Top Up"}
                                    size="md"
                                    isLoading={loading}
                                    bgColor={["primary", "main"]}
                                    border={["transparent", "primary"]}
                                    color={["primary", "white"]}
                                    type="submit"
                                    fullwidth
                                />
                            </Grid>
                        </form>
                    </FormContainer>
                </Container2>
            </Container1>
        </Layout>
    );
}

export const getServerSideProps = async (ctx) => {
    const baseURL = process.env.BASE_ENDPOINT;
    const authURL = process.env.AUTH_URL;


    return {
        props: {baseURL, authURL}
    };
};