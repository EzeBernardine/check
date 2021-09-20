import _Airtime from "../screens/Airtime";
import Layout from "../components/Layout";
import {Container1, Container2, FieldWrap, FormContainer, Label} from "../screens/Airtime/styles";
import {Header3} from "../components/Font/styles";
import {theme} from "../config/theme";
import {Spacer} from "../components/Spacer/styles";
import {Flex, Grid} from "../components/Box/styles";
import Button from "../components/Button";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import * as tpsAction from "../actions/tps";
import {Alert, Spinner} from "kodobe-react-components";

import {useRouter} from "next/router";

import Nav from '../components/Nav'
import * as billingAction from "../actions/billing";


export default function Disburse(props) {

    const router = useRouter();
    const [provider, setProvider] = useState(null);
    const [payload, setPayload] = useState({});
    const [inputs, setInputs] = useState([])
    const [pageLoading, setPageLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        console.log("Props", props);
        //initialize
        if(!props?.router?.query.ledger){
            Alert.showError({content: "Ledger Not Found"})
            return router.push("/");
        }
        if(!props?.router?.query.provider){
            Alert.showError({content: "Provider Not Found"})

            return router.push("/");
        }

        //get provider,
        getProvider(props?.router?.query.provider)
            .catch(console.error)
    }, [])


    useEffect(() => {
        console.log("provider change", provider)
        if(!provider) return;

        initialize(provider.name)
            .catch(console.error);
    }, [provider])


    const getProvider = async (providerId) => {
        const {error, data} = await billingAction.getPaymentProviderById(props.baseURL, providerId)
        console.log("getProvider", error, data);
        if (error) {
            Alert.showError({content: error});
            return;
            // return router.push("/");
        }
        setProvider(data);
    };


    const initialize = async (providerName) => {
        const {error, data} = await tpsAction.disburse.initialize(props.baseURL, providerName);
        console.log("initialize", error, data);
        if (error) {
            Alert.showError({content: error});
            return router.push("/");
        }
        setInputs(data.fields);
        setPageLoading(false)
    };
    const handleChange = (e) => {
        e.preventDefault();
        console.log("Payload", {
            ...payload,
            [e.target.name]: e.target.value,
        });
        setPayload({
            ...payload,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit  = async () => {
        setLoading(true);
        console.log("payload", payload);
        const {error: transferAuthError, data: transferAuthData} = await tpsAction.disburse.process(props.baseURL, provider.name, payload);
        console.log("transferAuth", transferAuthError, transferAuthData)
        if (transferAuthError) {
            setLoading(false)
            return Alert.showError({content: "Oops! We are unable to complete your airtime purchase"});
        }

        if(transferAuthData.transferAuthId){
            return Alert.showSuccess({content: "Process"});
        }
        setLoading(false)
        // inputs.push()
        // setInputs(inputs);
    }


    if (pageLoading) {
        return (
            <Flex className="center">
                <Spinner/>
            </Flex>
        );
    }
    return (
        <>
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
                        {provider.label}
                    </Header3>
                    <Spacer height="50px"></Spacer>
                    <FormContainer height="auto" justifyContent="flex-start">
                        <form>
                            <Grid gap="19px">
                                {
                                    inputs.map((input, index) => {
                                        if (Array.isArray(input.options)){
                                            return (
                                                <div key={index}>
                                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                                        <Label htmlFor={input.key}>{input.label}</Label>
                                                        <FieldWrap>
                                                            <select name={input.key} onChange={handleChange}>
                                                                {input.options && input.options.map(option => {
                                                                    return  <option selected={!!payload[input.key]} value={option.key} key={option.key}>{option.label}</option>
                                                                })}
                                                            </select>
                                                        </FieldWrap>
                                                    </Grid>
                                                </div>
                                            )
                                        }
                                        return (
                                            <div key={index}>
                                                <Grid alignItems="flex-start" direction="column" gap="8px">
                                                    <Label htmlFor={input.key}>{input.label}</Label>
                                                    <FieldWrap>
                                                        <input
                                                            type="text"
                                                            name={input.key}
                                                            id={input.key}
                                                            value={payload[input.key]}
                                                            onChange={handleChange}
                                                        />
                                                    </FieldWrap>
                                                </Grid>
                                            </div>
                                        )
                                    })
                                }

                                <Button
                                    text={"Process"}
                                    size="md"
                                    isLoading={loading}
                                    bgColor={["primary", "main"]}
                                    border={["transparent", "primary"]}
                                    color={["primary", "white"]}
                                    type="button"
                                    onClick={onSubmit}
                                    fullwidth
                                />
                            </Grid>
                        </form>
                    </FormContainer>
                </Container2>
            </Container1>
        </>
    );
}
