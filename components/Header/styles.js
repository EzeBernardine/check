import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({mainColor}) =>  mainColor &&  '#063159'};
  padding: 20px;
    *{
        font-family: ${({fontFamily, theme }) => fontFamily ||  theme.typography.fontFamily[fontFamily]};
    }
`;
export const Header2 = styled.h2`
  color: white;
  font-size: 16px;
  text-align: center;
`;

