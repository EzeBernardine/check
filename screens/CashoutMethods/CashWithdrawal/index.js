import { Span, Small } from "../../../components/Font/styles";
import { Flex, Grid } from "../../../components/Box/styles";
import { Spacer } from "../../../components/Spacer/styles";
import {
  _Header1,
  FieldWrap,
  Label,
  FormContainer,
  Container1,
} from "./styles";
import Button from "../../../components/Button";
import { theme } from "../../../config/theme";

const Fields = () => {
  const handleChange = () => {};
  return (
    <FormContainer height="auto" justifyContent="flex-start">
      <Container1 direction="column" alignItems="flex-start" pad="10px">
        <Flex justifyContent="flex-start" alignItems="flex-start" wrap="nowrap">
          <Small
            color={["grey", "100", theme]}
            size="font14"
            lineHeight="lineHeight16"
            weight="fontWeightNormal"
            fontFamily="sagoe"
          >
            Name:
          </Small>
          <Span
            color={["success", "0", theme]}
            size="font16"
            lineHeight="lineHeight19"
            weight="fontWeightNormal"
            fontFamily="sagoeBold"
          >
            Okorapjiojidere Dont Pronounce
          </Span>
        </Flex>
        <Flex justifyContent="flex-start" alignItems="flex-start" wrap="nowrap">
          <Small
            color={["grey", "100", theme]}
            size="font14"
            lineHeight="lineHeight19"
            weight="fontWeightNormal"
            fontFamily="sagoe"
          >
            Acc No.
          </Small>
          <Span
            color={["success", "0", theme]}
            size="font14"
            lineHeight="lineHeight16"
            weight="fontWeightNormal"
            fontFamily="sagoeBold"
          >
            00000000000
          </Span>
        </Flex>
      </Container1>

      <Spacer height="20px"></Spacer>

      <form>
        <Grid gap="19px">
          <div>
            <Grid alignItems="flex-start" direction="column" gap="8px">
              <Label htmlFor="email">Existing Account</Label>
              <FieldWrap>
                <select>
                  <option>Select</option>
                  <option>jcnkjasca</option>
                  <option>jcnkjasca</option>
                </select>
              </FieldWrap>
            </Grid>
          </div>

          <div>
            <Grid alignItems="flex-start" direction="column" gap="8px">
              <Label htmlFor="email">Phone Number</Label>
              <FieldWrap>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </FieldWrap>
            </Grid>
          </div>

          <Button
            text={"Validate"}
            size="md"
            bgColor={["primary", "main"]}
            border={["transparent", "primary"]}
            color={["primary", "white"]}
            type="button"
            onClick={() => []}
            fullwidth
          />
        </Grid>
      </form>
    </FormContainer>
  );
};
export default Fields;
