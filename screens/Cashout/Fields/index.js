import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import * as yup from "yup";
import { Flex, Grid } from "../../../components/Box/styles";
import { Spacer } from "../../../components/Spacer/styles";
import { _Header1, FieldWrap, Label, FormContainer } from "./styles";

const Fields = () => {
  const handleChange = () => {};
  return (
    <FormContainer height="auto" justifyContent="flex-start">
      <form>
        <Grid gap="19px">
          <div>
            <Grid alignItems="flex-start" direction="column" gap="8px">
              <Label htmlFor="email">Network</Label>
              <FieldWrap>
                <select>
                  <option>jcnkjasca</option>
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
        </Grid>

        {/* <Spacer height="30px"></Spacer> */}
      </form>
    </FormContainer>
  );
};
export default Fields;
