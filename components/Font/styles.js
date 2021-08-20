import styled from "styled-components";

export const Header1 = styled.h1`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Header2 = styled.h2`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Header3 = styled.h3`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Header4 = styled.h4`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Header5 = styled.h5`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Paragraph = styled.p`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;
export const Bold = styled.b`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
  font-weight: bold;
`;

export const Span = styled.span`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Small = styled.small`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Sub = styled.sub`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;

export const Anchor = styled.a`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;
export const ListItem = styled.li`
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamily[fontFamily]};
  font-weight: ${({ theme, weight }) => theme.typography[weight]};
  line-height: ${({ lineHeight, theme }) =>
    theme.typography.lineHeight[lineHeight]};
  text-align: ${({ textAlign, center }) =>
    center ? "center" : textAlign ? textAlign : "initial"};
  color: ${({ color: [key, value], theme }) => theme.palette[key][value]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;
