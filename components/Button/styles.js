import styled from "styled-components";
import { Flex } from "../Box/styles";

const renderGradient = ([key1, value1, key2, value2], theme) =>
  ` linear-gradient(to right, ${theme.palette[key1][value1]},${theme.palette[key2][value2]} )`;

const renderBackgroundColor = ([key, value], theme) =>
  theme.palette[key][value];

const variantSize = (size, theme) =>
  size
    ? size === "sm"
      ? theme.fontSizes.font14
      : size === "md"
      ? theme.fontSizes.font16
      : size === "lg"
      ? theme.fontSizes.font20
      : ""
    : theme.fontSizes.font14;

const variantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.4rem 1rem"
      : size === "md"
      ? "0.6rem 1.25rem"
      : size === "lg"
      ? "1rem 2.2rem"
      : "0.8rem 2rem";
  }
};
const tabVariantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.3rem 1rem"
      : size === "md"
      ? "0.6rem 2rem"
      : size === "lg"
      ? "1rem 2.2rem"
      : "0.5rem .7rem";
  }
};
const mobileVariantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.3rem 0.6rem"
      : size === "md"
      ? "0.4rem .7rem"
      : size === "lg"
      ? ".5rem 1.5rem"
      : "0.6rem 1rem";
  }
};

export const ButtonStyle = styled.button`
  position: relative;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor, isLoading, theme, disabled }) =>
    isLoading || disabled
    ? theme.palette.grey[200]
    : !Array.isArray(bgColor) ?  bgColor
      : renderBackgroundColor(bgColor, theme)};
  color: ${({ theme, color: [key, value], isLoading, disabled }) =>
    isLoading || disabled
      ? theme.palette.grey[300]
      : theme.palette[key][value]};
  border: 2px solid
    ${({ theme, border: [key, value] = [], isLoading, disabled }) =>
      isLoading || disabled
        ? theme.palette.grey[200]
        : !!key
        ? theme.palette[key][value]
        : "transparent"};
  font-size: ${({ size, theme }) => variantSize(size, theme)};
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "max-content")};
  padding: ${({ size, hasIcon }) => variantPadding(size, hasIcon)};
  @media (max-width: 750px) {
    padding: ${({ size, hasIcon }) => tabVariantPadding(size, hasIcon)};
  }
  @media (max-width: 600px) {
    padding: ${({ size, hasIcon }) => mobileVariantPadding(size, hasIcon)};
  }
  border-radius: ${({ theme }) => theme.shape.borderRadius5};
  font-weight: bold;
  cursor: ${({ isLoading, disabled }) =>
    isLoading || disabled ? "not-allowed" : "pointer"};

  opacity: 1;
  :hover {
    opacity: 0.8;
  }
`;

export const Loader = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  margin: auto;
`;
export const Icon = styled.div`
  margin-left: 10px;
`;
