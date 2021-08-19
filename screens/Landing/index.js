import {Container, _Span} from "./styles";
import Cash from "./Cash";

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
            <Cash {...props} items={items}/>
        </Container>
    );
}
export default Header;
