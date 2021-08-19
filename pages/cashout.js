import Layout from "../components/Layout";
import {Container} from "../screens/CashoutMethods/styles";
import {Header3, Span} from "../components/Font/styles";
import {theme} from "../config/theme";
import Card from "../screens/CashoutMethods/Card";
import {Spacer} from "../components/Spacer/styles";
import {Flex, Grid} from "../components/Box/styles";
import {Cards} from "../screens/CashoutMethods/Card/styles";
import {useRouter} from "next/router";

export default function Cashout(props) {
    const router = useRouter();
    console.log("Cashout Props", props)
    const methods = [
        {
            name: "Airtime",
            click: () => window.location.href = "/airtime", //i am using this so i can get the props in airtime,
        },
        {
            name: "Cash Withdrawal",
            click: () => window.location.href = "/withdrawal", //i am using this so i can get the props in withdrawals
        },
    ];
    return (
        <Layout>
            <Container>
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
                    {methods.map((method) => (
                        <Cards
                            justifyContent="space-between"
                            key={method.name}
                            onClick={() => method.click()}
                        >
                            <Flex direction="column" width="auto" alignItems="flex-start">
                                <Span
                                    color={["primary", "main", theme]}
                                    size="font16"
                                    lineHeight="lineHeight19"
                                    weight="fontWeightNormal"
                                    fontFamily="sagoeBold"
                                >
                                    {method.name}
                                </Span>
                            </Flex>
                        </Cards>
                    ))}
                </Grid>
            </Container>
        </Layout>
    );
}
