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
import * as tpsAction from "../actions/tps";
import {Alert} from "kodobe-react-components";
import Nav from '../components/Nav'

export default function Airtime(props) {

    const [airtimePayload, setAirtimePayload] = useState({
        amount: 0,
        phoneNumber: Cookies.get("phoneNumber") || ""

    });
    const [networks, setNetworks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAllSupportedNetworks()
            .catch(console.error);
    }, [])

    const getAllSupportedNetworks = async () => {
        const {error, data} = await tpsAction.airtime.getNetworks(props.baseURL);
        console.log("getAllSupportedNetworks", error, data);
        if (error) return Alert.showError({content: error});
        setNetworks(data);
        setLoading(false)
    };
    const handleChange = (e) => {
        e.preventDefault();
        console.log("Airtime", {
            ...airtimePayload,
            [e.target.name]: e.target.value,
        });
        setAirtimePayload({
            ...airtimePayload,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit  = async () => {
        setLoading(true);
        console.log("Airtime", airtimePayload);

        if (!airtimePayload.amount) {
            setLoading(false);
            return Alert.showError({content: "Amount is required"});
        }

        //make actual transfer
        const {error, data} = await tpsAction.airtime.buyAirtime(props.baseURL, airtimePayload);
        console.log("buyAirtime", error, data)

        if (error) {
            setLoading(false)
            return Alert.showError({content: "Oops! We are unable to complete your airtime purchase"});
        }
        setLoading(false);
        Alert.showSuccess({content: "Your airtime purchase is successful."})
    }
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
                        Buy Airtime
                    </Header3>
                    <Spacer height="50px"></Spacer>
                    <FormContainer height="auto" justifyContent="flex-start">
                        <form>
                            <Grid gap="19px">
                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="email">Select Network</Label>
                                        <FieldWrap>
                                            <select name="network" onChange={handleChange}>
                                                {networks && networks.map(network => {
                                                    return  <option value={network} key={network}>{network}</option>
                                                })}
                                            </select>
                                        </FieldWrap>
                                    </Grid>
                                </div>

                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="phoneNumber">Phone Number</Label>
                                        <FieldWrap>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                value={airtimePayload?.phoneNumber}
                                                onChange={handleChange}
                                            />
                                        </FieldWrap>
                                    </Grid>
                                </div>

                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="amount">Amount: </Label>
                                        <FieldWrap>
                                            <input
                                                type="number"
                                                name="amount"
                                                id="amount"
                                                onChange={handleChange}
                                            />
                                        </FieldWrap>
                                    </Grid>
                                </div>

                                <Button
                                    text={"Buy Airtime"}
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
        </Layout>
    );
}
