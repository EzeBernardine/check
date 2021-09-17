import { UseContext } from "../../lib/context";
import { Container,Header2 } from "./styles";

const Header = () => {
    const { portalConfig: { fontFamily, mainColor } } = UseContext()


  return (
    <Container mainColor={mainColor} fontFamily={fontFamily}>
      <Header2>Winnings</Header2>
    </Container>
  );
};
export default Header;
