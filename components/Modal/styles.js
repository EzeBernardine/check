import styled from "styled-components";
import { OverFlowScrollBar } from "../OverflowScroll/styles";

export const Container = styled("div")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000;
  background: rgba(0, 0, 0, 0.25);
  max-width: 480px;
  margin: auto;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const Overlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 480px;
  margin: auto;
`;

export const Main = styled("main")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms ease-in-out;
  max-width: 480px;
  margin: auto;
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-80vh);"};
`;

export const ModalWrap = styled("div")`
  position: relative;
  max-width: 480px;
  width: 90%;
  max-height: 80vh;
  height: max-content;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const HeaderWrap = styled("div")`
  position: relative;
  height: ${({ noHeader }) => (noHeader ? 0 : "60px")};
  width: 100%;
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.27);
  right: 0;
  left: 0;
  top: 0;
`;
export const Header = styled("div")`
  width: 100%;
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: initial;
  font-family: ${({ theme }) => theme.typography.fontFamily.sagoeBold};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.font16};
  color: ${({ theme }) => theme.palette.primary["main"]};
  font-weight: bold;
  margin: 0 15px;
  text-align: center;
`;

export const Body = styled("div")`
  height: 100%;
  width: 100%;
`;

export const CloseIconWrap = styled("span")`
  position: relative;
  right: 30px;
  float: right;
  top: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey[200]};
`;
export const Content = styled("div")`
  width: auto;
  color: ${({ theme }) => theme.palette.grey[300]};
  padding: 30px;
`;
export const OverFlow = styled(OverFlowScrollBar)`
  max-height: calc(80vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
`;
