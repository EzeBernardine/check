import { Container, _Span } from "./styles";
import { useState } from "react";
import Tabs from "../../components/Tabs/index";
import { UseContext } from "../../lib/context";
import Cash from "./Cash";

const Header = () => {
  const items = [
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
      <Cash items={items} />
    </Container>
  );
};
export default Header;
