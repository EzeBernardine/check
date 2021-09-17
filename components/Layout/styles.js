import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  height: 100vh;
  overflow-y: auto;
  margin: auto;
    *{
        font-family: ${({fontFamily, theme}) =>  fontFamily ||  theme.typography.fontFamily[fontFamily]};
    }
`;
export const Main = styled.main`
  background-color:  #f3f3f3;
  min-height: 100vh
`;
