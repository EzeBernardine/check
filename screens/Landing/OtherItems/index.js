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
import hamperImage from '../../../public/Assets/hamper.png'
import * as invoicingAction from "../../../actions/invoice"



const OtherItems = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [invoices, setInvoices] = useState([]);
    let userId = Cookies.get("userId");
    const user = Cookies.get("user") && JSON.parse(Cookies.get("user"));
    if(!userId){
        userId = user?.userId
    }

    useEffect(() => {
        setLoading(false)

        const getInvoices = async () => {
            const {error, data} = await invoicingAction.getInvoices(props.baseURL,  userId)
            if (error) return Alert.showError({content: error});
            setInvoices(data)
            console.log("getInvoices", error, data);
            setLoading(false)
    
        };
        getInvoices().catch(console.error);
    }, [])


   const otherItems =[
       {
           image: hamperImage,
           item: 'Lunch for two',
           collected:true,
       },
       {
           image: hamperImage,
           item: 'Shopping for three weekends',
           collected:true,
       }
   ]

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
                Other Items
            </Header1>


            <Spacer height="30px"></Spacer>

            <div>
                <Grid gap="20px">
                    {otherItems.map((otherItem) => (
                        <Container4 justifyContent="space-between" key={generateID(16)}>
                            <Flex  width="auto" alignItems="center" justifyContent='flex-start' wrap='nowrap'>
                                <Frame
                                    height='50px'
                                    width='50px'
                                    object='contain'
                                >
                                  <img src={otherItem.image} alt=''/>
                                </Frame>
                                <Span
                                    color={["grey", "0", theme]}
                                    size="font16"
                                    lineHeight="lineHeight16"
                                    weight="fontWeightMedium"
                                    fontFamily="sagoe"
                                >
                                    {otherItem.item}
                                </Span>
                            </Flex>

                            <Flex width="auto">
                                <Button
                                    text={"Submit"}
                                    size="md"
                                    bgColor={["primary", "white"]}
                                    border={["transparent", "primary"]}
                                    color={["primary", "main"]}
                                    type="button"
                                    onClick={() => []}
                                >
                                  Completed
                                </Button>
                            </Flex>
                        </Container4>
                    ))}
                </Grid>
            </div>
        </Container>
    );
};
// export default withAuth(OtherItems);
export default OtherItems;
