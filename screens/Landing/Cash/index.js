import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

import Button from "../../../components/Button";
import {Container, Container3, Container4} from "./styles";
import {Header1, Small, Span, Header3} from "../../../components/Font/styles";

import withAuth from "../../../components/withAuth";

import {theme} from "../../../config/theme";
import {Spacer} from "../../../components/Spacer/styles";
import {Flex, Grid} from "../../../components/Box/styles";
import {generateID} from "../../../lib/generateID";


import * as billingAction from "../../../actions/billing"
import {Alert, Spinner} from "kodobe-react-components";


const Cash = (props) => {
    // console.log("Cash", props);
    const router = useRouter();
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const ledgerId = Cookies.get("ledgerId")
    useEffect(() => {
        //get user wallet
        getUserWallet(ledgerId)
            .catch(console.error);


        getUserWalletTransactions(ledgerId)
            .catch(console.error);


    }, [])


    const getUserWallet = async (ledgerId) => {
        const {error, data} = await billingAction.getWallet(props.baseURL, ledgerId)
        if (error) return Alert.showError({content: error});
        setBalance(data?._embedded?.wallets?.[0]?.balance || 0)
        console.log("getUserWallet", error, data);

        setLoading(false)

    };

    const getUserWalletTransactions = async (ledgerId) => {
        const {error, data} = await billingAction.getWalletTransactions(props.baseURL, ledgerId)
        if (error) return Alert.showError({content: error});
        setTransactions(data?._embedded?.walletTransactions || [])

        console.log("getUserWalletTransactions", error, data);
    };

    if (loading) {
        return (
            <div className="center">
                <Spinner/>
            </div>
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
                Winnings
            </Header1>

            <Spacer height="30px"></Spacer>

            <Container3 direction="column">
                <Small
                    color={["grey", "100", theme]}
                    size="font14"
                    lineHeight="lineHeight16"
                    weight="fontWeightNormal"
                    fontFamily="sagoe"
                >
                    Balance
                </Small>
                <Span
                    color={["grey", "0", theme]}
                    size="font24"
                    lineHeight="lineHeight28"
                    weight="fontWeightNormal"
                    fontFamily="sagoeBold"
                >
                    {balance ? balance / 100 : 0}
                </Span>
                <Spacer height="10px"></Spacer>
                <Button
                    text={"Cashout"}
                    size="sm"
                    bgColor={["primary", "main"]}
                    border={["transparent", "primary"]}
                    color={["primary", "white"]}
                    type="button"
                    onClick={() => router.push("/cashout")}
                />
            </Container3>

            <Spacer height="30px"></Spacer>

            <div>
                <Header3
                    color={["grey", "0", theme]}
                    size="font18"
                    lineHeight="lineHeight56"
                    weight="fontWeightNormal"
                    fontFamily="sagoeBold"
                >
                    Transaction History
                </Header3>

                <Spacer height="20px"></Spacer>
                <Grid gap="20px">
                    {transactions.map((transaction) => (
                        <Container4 justifyContent="space-between" key={transaction.id}>
                            <Flex direction="column" width="auto" alignItems="flex-start">
                                <Span
                                    color={["primary", "main", theme]}
                                    size="font16"
                                    lineHeight="lineHeight19"
                                    weight="fontWeightNormal"
                                    fontFamily="sagoeBold"
                                >
                                    {transaction.creditAmount ? "credit" : "debit"}
                                </Span>
                                <Small
                                    color={["primary", "main", theme]}
                                    size="font14"
                                    lineHeight="lineHeight16"
                                    weight="fontWeightNormal"
                                    fontFamily="sagoe"
                                >
                                    {transaction.createdAt}
                                </Small>
                            </Flex>

                            <Flex width="auto">
                                <Span
                                    color={["primary", "main", theme]}
                                    size="font16"
                                    lineHeight="lineHeight19"
                                    weight="fontWeightNormal"
                                    fontFamily="sagoeBold"
                                >
                                    {transaction.creditAmount ? "+" + transaction.creditAmount : "-" + transaction.debitAmount}
                                </Span>
                            </Flex>
                        </Container4>
                    ))}
                </Grid>
            </div>
        </Container>
    );
};
export default withAuth(Cash);
// export default Cash;
