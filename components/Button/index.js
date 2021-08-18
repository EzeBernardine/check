import { ButtonStyle, Loader, Icon } from "./styles";
import { LoaderIcon } from "../../public/svg";
import { theme } from "../../config/theme";
import PropTypes from "prop-types";

const Button = (props) => {
  const { isLoading, icon } = props;
  return (
    <ButtonStyle type={"button"} disabled={isLoading} {...props}>
      {isLoading ? (
        <Loader>
          <LoaderIcon
            color={["grey", "100", theme]}
            width="30px"
            height="30px"
          />
        </Loader>
      ) : null}
      {props.text}
      {icon ? <Icon> {icon}</Icon> : null}
    </ButtonStyle>
  );
};
Button.propTypes = {
  isLoading: PropTypes.bool,
};
export default Button;
