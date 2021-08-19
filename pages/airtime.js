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

export default function Airtime() {

    const [airtimePayload, setAirtimePayload] = useState({});

    useEffect(() => {
        setAirtimePayload({
            phoneNumber: Cookies.get("phoneNumber")
        })

        getAllSupportedNetworks()
            .catch(console.error);
    }, [])

    const getAllSupportedNetworks = async () => {

    };
    const handleChange = () => {

    };
    return (
        <Layout>
            <Container1>
                <Container2>
                    <Header3
                        color={["grey", "0", theme]}
                        size="font18"
                        lineHeight="lineHeight56"
                        weight="fontWeightNormal"
                        fontFamily="sagoeBold"
                    >
                        Select Network Provider
                    </Header3>
                    <Spacer height="50px"></Spacer>
                    <FormContainer height="auto" justifyContent="flex-start">
                        <form>
                            <Grid gap="19px">
                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="email">Network</Label>
                                        <FieldWrap>
                                            <select>
                                                <option value="g">Select</option>
                                                <option value="MTN">MTN</option>
                                                <option value="Airtel">Airtel</option>
                                                <option value="GLO">GLO</option>
                                            </select>
                                        </FieldWrap>
                                    </Grid>
                                </div>

                                <div>
                                    <Grid alignItems="flex-start" direction="column" gap="8px">
                                        <Label htmlFor="email">Phone Number</Label>
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
                                        <Label htmlFor="email">Amount: </Label>
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
                                    text={"Submit"}
                                    size="md"
                                    bgColor={["primary", "main"]}
                                    border={["transparent", "primary"]}
                                    color={["primary", "white"]}
                                    type="button"
                                    onClick={() => []}
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
