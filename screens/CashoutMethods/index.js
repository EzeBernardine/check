import { Container, _Span } from "./styles";
import { useState, useRef } from "react";
import Tabs from "../../components/Tabs/index";
import { UseContext } from "../../lib/context";
import { Header1, Small, Span, Header3 } from "../../components/Font/styles";
import { theme } from "../../config/theme";
import Card from "./Card";

const Landing = () => {
  return (
    <Container>
      <Flex>
        <Span
          color={["grey", "0", theme]}
          size="font14"
          lineHeight="lineHeight16"
          weight="fontWeightNormal"
          fontFamily="sagoe"
        >
          Cashout
        </Span>
      </Flex>

      <Header3
        color={["grey", "0", theme]}
        size="font18"
        lineHeight="lineHeight56"
        weight="fontWeightNormal"
        fontFamily="sagoeBold"
      >
        Cashout
      </Header3>

      <Card />
    </Container>
  );
};
export default Landing;
