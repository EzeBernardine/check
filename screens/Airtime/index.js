import { Grid } from "../../components/Box/styles";
import {
  FieldWrap,
  Label,
  FormContainer,
  Container1,
  Container2,
} from "./styles";
import Button from "../../components/Button";
import { theme } from "../../config/theme";
import { Header3 } from "../../components/Font/styles";
import { Spacer } from "../../components/Spacer/styles";

const Fields = () => {
  const handleChange = () => {};
  return (
    <Container1>
      <Container2>
        <Header3
          color={["grey", "0", theme]}
          size="font18"
          lineHeight="lineHeight56"
          weight="fontWeightNormal"
          fontFamily="sagoeBold"
        >
          Selct Network Provider
        </Header3>
        <Spacer height="50px"></Spacer>
        <FormContainer height="auto" justifyContent="flex-start">
          <form>
            <Grid gap="19px">
              <div>
                <Grid alignItems="flex-start" direction="column" gap="8px">
                  <Label htmlFor="email">Network</Label>
                  <FieldWrap>
                    <select>
                      <option value="g">Select</option>
                      <option value="MTN">MTN</option>
                      <option value="Airtel">Airtel</option>
                      <option value="GLO">GLO</option>
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
                text={"Submit"}
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
      </Container2>
    </Container1>
  );
};
export default Fields;
