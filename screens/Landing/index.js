import { Container, _Span } from "./styles";
import Cash from "./Cash";
import OtherItems from "./OtherItems";
import Tabs from "../../components/Tabs";

const Header = (props) => {
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
      <Tabs
        click={(tab) => console.log(tab, "tab")}
        nonActiveColor={"#063159"}
        activeColor={"white"}
        bgColor={"transaparent"}
        full
      >
        <div label="Cash">
          <Cash {...props} items={items} />
        </div>
        <div label="Other Items">
          <OtherItems />
          {/* sasda */}
        </div>
      </Tabs>
    </Container>
  );
};
export default Header;
