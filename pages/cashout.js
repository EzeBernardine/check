import Layout from "../components/Layout";
import {Container} from "../screens/CashoutMethods/styles";
import {Header3, Span, Italics} from "../components/Font/styles";
import {theme} from "../config/theme";
import Card from "../screens/CashoutMethods/Card";
import {Spacer} from "../components/Spacer/styles";
import {Flex, Grid} from "../components/Box/styles";
import {Cards} from "../screens/CashoutMethods/Card/styles";
import {useRouter} from "next/router";
import Link from "next/link";
import Nav from '../components/Nav'
import React, {useEffect, useState} from "react";
import * as billingAction from "../actions/billing";
import {Alert, Spinner} from "kodobe-react-components";
import withAuth from "../components/withAuth";

const  Cashout = (props) =>  {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [providers, setProviders] = useState([]);
    console.log("Router", router.query)
    useEffect(() => {
        if(!props?.router?.query.ledger){
            return router.push("/");
        }

        handlePaymentProvider(props?.router?.query.ledgerId)
        //get wallet
    }, [])

    const handlePaymentProvider = async (ledgerId) => {
        const {error, data} = await billingAction.getPaymentProviderByQuery(props.baseURL, {clientLedgerId: ledgerId, providerType: "CASH_OUT"})
        if (error) {
            Alert.showError({content: error});
            return router.push("/");
        }
        const providers = data._embedded?.paymentProviders || [];
        if (!providers?.length){
            Alert.showError({content: "Cash-out is not supported for this method"});
            return router.push("/");
        }
        setProviders(data._embedded?.paymentProviders || [])
        setLoading(false)

    };

    if (loading) {
        return (
            <Flex className="center">
                <Spinner/>
            </Flex>
        );
    }
    return (
        <>
            <Container>
                <Nav navItems={[{name: 'Home', href: '/'}]}/>

                <Header3
                    color={["grey", "0", theme]}
                    size="font18"
                    lineHeight="lineHeight56"
                    weight="fontWeightNormal"
                    fontFamily="sagoeBold"
                >
                    Cashout
                </Header3>
                <Spacer height="20px"></Spacer>
                <Grid gap="20px">
                    {providers.map((provider) => (
                        <Cards
                            justifyContent="space-between"
                            key={provider.id}
                            onClick={() => router.push({
                                pathname: "disburse",
                                query: {ledger: props?.router?.query.ledger, provider: provider?.id}
                            })}
                        >
                            <Flex direction="column" width="auto" alignItems="flex-start">
                                <Span
                                    color={["primary", "main", theme]}
                                    size="font16"
                                    lineHeight="lineHeight19"
                                    weight="fontWeightNormal"
                                    fontFamily="sagoeBold"
                                >
                                    {provider.label}
                                </Span>
                            </Flex>
                        </Cards>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default withAuth(Cashout);
