import styled from "styled-components";

const reduceHeight = (height) => {
  let value = +height.split("px")[0];
  if (value > 150) {
    return value - 100 + "px";
  }
  if (value > 100) {
    return value - 30 + "px";
  }
  if (value > 50) {
    return value - 20 + "px";
  }
};
const largeReduceHeight = (height) => {
  let value = +height.split("px")[0];
  if (value > 170) {
    return value - 90 + "px";
  }
 
};
export const Spacer = styled.div`
  height: ${({ height }) => height || "0px"};
  width: 100%;
  @media (max-width: 13700px) {
    height: ${({ height }) => height && largeReduceHeight(height)};
  }
  @media (max-width: 750px) {
    height: ${({ height }) => height && reduceHeight(height)};
  }
`;
