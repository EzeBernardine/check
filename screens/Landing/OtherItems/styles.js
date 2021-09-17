import styled from "styled-components";
import { Flex } from "../../../components/Box/styles";

export const Container = styled.div`
  padding: 0 30px;
  width: 100%;
`;

export const _Span = styled.span`
  color: white;
`;
export const Button = styled.button`
  font-size: 11px;
  padding: 5px 7px;
  color: ${({ theme }) => theme.palette.success[0]};
  background-color: ${({ theme }) => theme.palette.success[200]};
  border-radius: ${({ theme }) => theme.shape.borderRadius10};
  &.unpaid {
    color: ${({ theme }) => theme.palette.secondary["0"]};
  }
  &.redemptionCode {
    color: #063159;
    border-radius: 0;
    margin-top: 10px;
    padding: 0;
    background: transparent;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
  }
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
    > span {
      padding-left: 5px;
    }
  }
`;
