import {
  Container,
  _Span,
  Container2,
  Tab,
  Container3,
  Container4,
} from "./styles";
import { useState } from "react";
import { Header1, Small, Span, Header3 } from "../../components/Font/styles";
import { theme } from "../../config/theme";
import { Spacer } from "../../components/Spacer/styles";
import { Flex, Grid } from "../../components/Box/styles";
import Tabs from "../../components/Tabs/index";
import Cash from "./Cash";

const Header = () => {
  const [, setTabType] = useState("Profile Update"); //for tab section

  const transactions = [
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
  ];
  return (
    <Container>
      <Tabs
        click={(tab) => setTabType(tab)}
        nonActiveColor={"red"}
        activeColor={"blue"}
        bgColor={"yellow"}
        full
      >
        <div label="Cash">
          <Cash />
        </div>
        <div label="Other Items">Other Items</div>
      </Tabs>

      <Spacer height="30px"></Spacer>
    </Container>
  );
};
export default Header;
