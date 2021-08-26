import styled from "styled-components";
import { Flex, Grid } from "../../../components/Box/styles";

export const Container = styled.div``;

export const _Span = styled.span`
  color: white;
`;
export const Button = styled.button`
  font-size: 11px;
  padding: 5px 7px;
  color: ${({ theme }) => theme.palette.success[0]};
  background-color: ${({ theme }) => theme.palette.success[200]};
  border-radius: ${({ theme }) => theme.shape.borderRadius10};
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
  > div:first-child {
    flex: 1;
    > span{
        padding-left: 5px;
    }
  }
`;
