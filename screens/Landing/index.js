import { Container, _Span } from "./styles";
import { useState } from "react";
import Tabs from "../../components/Tabs/index";
import Cash from "./Cash";

const Header = (props) => {
  return (
    <Container>
      {/* <Tabs
        click={(tab) => console.log(tab, 'tab')}
        nonActiveColor={"#063159"}
        activeColor={"white"}
        bgColor={"transaparent"}
        full
      >
        <div label="Cash">
        </div>
        <div label="Other Items">Other Items</div>
      </Tabs> */}
          <Cash {...props} />
    </Container>
  );
};
export default Header;
