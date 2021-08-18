import styled from "styled-components";
import { Flex, Grid } from "../../components/Box/styles";

export const Container = styled.div`
  padding: 30px;
`;
export const Container2 = styled(Flex)``;
export const Tab = styled(Flex)`
  background-color: #063159;
  padding: 10px;
  flex: 1;
  border-radius: 7px 7px 0 0;
`;
export const _Span = styled.span`
  color: white;
`;

export const Container3 = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius10};
  padding: 20px;
`;
export const Container4 = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius10};
  padding: 10px;
`;
