import styled from "styled-components";
import { Flex, Grid } from "../../../components/Box/styles";

export const Container = styled.div``;

export const _Span = styled.span`
  color: white;
`;

export const Container3 = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius10};
  padding: 20px;
`;
export const Cards = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius10};
  padding: 10px;
  cursor: pointer;
  &:hover {
      box-shadow:  ${({ theme }) => theme.shadows[300]};
  }
`;
