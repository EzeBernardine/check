import Header from "../Header";
import { Container, Main } from "./styles";
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />

      <Main>{children}</Main>
    </Container>
  );
};
export default Layout;
