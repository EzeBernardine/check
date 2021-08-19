import { Container, _Span, Container3, Cards } from "./styles";
import { useState, useRef } from "react";
import { Header1, Small, Span, Header3 } from "../../../components/Font/styles";
import { theme } from "../../../config/theme";
import { Spacer } from "../../../components/Spacer/styles";
import { Flex, Grid } from "../../../components/Box/styles";
import { generateID } from "../../../lib/generateID"; 
import { useRouter } from "next/router";
import Fields from "../Fields";
import Withdrawal from "../../../pages/withdrawal";
const Cash = ({ items }) => {
  const router = useRouter();
  const methods = [
    {
      name: "Airtime",
      click: () => router.push("/airtime"),
    },
    {
      name: "Cash Withdrawal",
      click: () => router.push("/withdrawal"),
    },
  ];

  return (
    <Container>
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
  );
};
export default Cash;
