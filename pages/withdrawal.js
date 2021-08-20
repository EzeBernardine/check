import Layout from "../components/Layout";
import {Container3, Container4, FieldWrap, FormContainer, Label} from "../screens/CashWithdrawal/styles";
import {Header3} from "../components/Font/styles";
import {theme} from "../config/theme";
import {Spacer} from "../components/Spacer/styles";
import {Grid} from "../components/Box/styles";
import Button from "../components/Button";
import {useEffect, useState} from "react";
import * as tpsAction from "../actions/tps"
import {Alert} from "kodobe-react-components";
import Nav from '../components/Nav'

export default function Withdrawal(props) {

    console.log("Withdrawal Props", props);
    const [banks, setBanks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false)
    const [account, setAccount] = useState({
        amount: 0
    })
    useEffect(() => {
        getAllSupportedBanks()
            .catch(console.error);
    }, [])

    const getAllSupportedBanks = async () => {
        const {error, data} = await tpsAction.fundsTransfer.getBanksList(props.baseURL);
        if (error) return Alert.showError({content: error});
        setBanks(data);
        setLoading(false)

    };

    const handleChange = (e) => {
        e.preventDefault();

        console.log("Account", {
            ...account,
            [e.target.name]: e.target.value,
        });

        if (e.target.name == "bankCode") {
            setValidated(false);
        }

        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };


    const onSubmit = async () => {
        setLoading(true);
        console.log("Account", account);


        if (!validated) {

            //validate account number
            const {error, data} = await tpsAction.fundsTransfer.createTransferAuth(props.baseURL, account);
            console.log("Create Transfer Auth", error, data);
            if (error) {
                setLoading(false)
                return Alert.showError({content: error});
            }
            setAccount(data);
            setValidated(true)
            setLoading(false);
            return;
        }


        if (!account.amount) {
            setLoading(false);
            return Alert.showError({content: "Amount is required"});
        }

        //make actual transfer
        const {error, data} = await tpsAction.fundsTransfer.makeFundsTransfer(props.baseURL, account);

        console.log("makeFundsTransfer", error, data)

        if (error) {
            setLoading(false)
            return Alert.showError({content: error});
        }
        setLoading(false);
        Alert.showSuccess({content: "Withdrawal is processing..."})
    };

    return (
        <Layout>
            <Container3>
                <Nav navItems={[{name: 'Home /', href: '/'}, {name: 'Cashout', href: '/cashout'} ]}/>


                <Container4>
                    <Header3
                        color={["grey", "0", theme]}
                        size="font18"
                        lineHeight="lineHeight56"
                        weight="fontWeightNormal"
                        fontFamily="sagoeBold"
                    >
                        Withdrawal
                    </Header3>
                    <Spacer height="50px"></Spacer>

                    <FormContainer height="auto" justifyContent="flex-start">
                        <form>
                            <Grid gap="19px">
                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="bankCode">Select Bank</Label>
                                        <FieldWrap>
                                            <select name="bankCode" id="bankCode" onChange={handleChange}>
                                                {banks && banks.map((bank) => {
                                                    return <option key={bank.bankCode + bank.bankName}
                                                                   value={bank.bankCode}>{bank.bankName}</option>
                                                })}
                                            </select>
                                        </FieldWrap>
                                    </Grid>
                                </div>

                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="accountNumber">Account Number</Label>
                                        <FieldWrap>
                                            <input
                                                type="text"
                                                name="accountNumber"
                                                id="accountNumber"
                                                value={account?.accountNumber || ""}
                                                onChange={handleChange}
                                            />
                                        </FieldWrap>
                                    </Grid>
                                </div>

                                {
                                    validated && (
                                        <>
                                            <div>
                                                <Grid alignItems="flex-start" direction="column" gap="8px">
                                                    <Label htmlFor="accountName">Account Name</Label>
                                                    <FieldWrap>
                                                        <input
                                                            type="text"
                                                            name="accountName"
                                                            id="accountName"
                                                            value={account?.accountName || ""}
                                                            disabled={true}
                                                        />
                                                    </FieldWrap>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Grid alignItems="flex-start" direction="column" gap="8px">
                                                    <Label htmlFor="amount">Amount</Label>
                                                    <FieldWrap>
                                                        <input
                                                            type="number"
                                                            name="amount"
                                                            id="amount"
                                                            value={account?.amount || 0}
                                                            onChange={handleChange}
                                                        />
                                                    </FieldWrap>
                                                </Grid>
                                            </div>
                                        </>

                                    )
                                }

                                <Button
                                    text={validated ? "Withdraw" : "Validate"}
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
                </Container4>
            </Container3>
        </Layout>
    );
}
