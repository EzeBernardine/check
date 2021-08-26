import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Container, Container3, Container4, Button } from "./styles";
import {Header1, Small, Span, Header3} from "../../../components/Font/styles";
import withAuth from "../../../components/withAuth";
import {theme} from "../../../config/theme";
import {Spacer} from "../../../components/Spacer/styles";
import {Flex, Frame, Grid} from "../../../components/Box/styles";
import { generateID } from "../../../lib/generateID";
import hamperImage from '../../../public/Assets/hamper.png'


const OtherItems = (props) => {
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
