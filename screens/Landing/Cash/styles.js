import styled from "styled-components";
import { Flex, Grid } from "../../../components/Box/styles";

export const Container = styled.div`
padding: 0 30px;
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
