import styled from "styled-components";
import { Flex } from "../../components/Box/styles";

export const Container1 = styled(Flex)`
  padding: 20px;
`;
export const Container2 = styled(Flex)`
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.common["white"]};
  border-radius: ${({ theme }) => theme.shape.borderRadius5};
`;

// ------------------fields---------------
export const FormContainer = styled(Flex)`
  > form {
    width: 100%;
  }
`;

export const FieldWrap = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: ${({ theme }) => theme.shape.borderRadius6};
  height: 48px;
  padding-right: 10px;
  input,
  select {
    flex: 1;
    background: transparent;
    border: none;
    padding: 10px;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.palette.grey[900]};
  text-align: start;
  font-size: ${({ theme }) => theme.fontSizes.font14};
  font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
  line-height: ${({ theme }) => theme.typography.lineHeight.lineHeight16};
`;
