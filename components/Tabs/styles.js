import styled from "styled-components";

export const TabWrapper = styled("div")``;

export const TabList = styled("ol")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding-left: 0;
  display: flex;
  width: 100%;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor :  theme.palette.primary.main};
  height: auto;
  align-items: center;
  justify-content: flex-start;
  transition: background 0.3s ease-out;
  overflow-x: auto;
  scrollbar-color: #e3e3e3 transparent;
  scrollbar-width: none;
  border-bottom: 2px solid #f1f1f1;
`;
export const ListItem = styled("li")`
  position: relative;
  list-style: none;
  padding: 0.8rem 0;
  flex: ${({ full }) => full && 1};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.05rem;
  height: 100%;
  background-color: #f1f1f1;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ nonActiveColor, theme }) =>
    nonActiveColor
      ? nonActiveColor
      : theme
      ? theme.palette.grey[100]
      : "#b9a694"};
  border-radius: 7px 7px 0 0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin: 0 10px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  &:hover {
    ::before {
      background: #f1f1f1;
      position: absolute;
      content: "";
      width: 100%;
      bottom: -2px;
      height: 2px;
      left: 0%;
      right: 0;
    }
  }
  &.tab-list-active {
    color: ${({ activeColor, theme }) =>
      activeColor
        ? activeColor
        : theme
        ? theme.palette.common.white
        : "#de8430"};

    background-color: ${({ nonActiveColor, theme }) =>
      !nonActiveColor ? !nonActiveColor : theme.palette.primary["main"]};
    ::before {
      background: ${({ activeColor, theme }) =>
        activeColor
          ? activeColor
          : theme
          ? theme.palette.primary.main
          : "#de8430"};
      position: absolute;
      content: "";
      width: 100%;
      bottom: -2px;
      height: 2px;
      left: 0%;
      right: 0;
      z-index: 10;
    }
  }
  @media (max-width: 920px) {
    font-size: 14px;
    padding: 0 10px 10px;
  }
`;

export const Animate = styled("div")`
  @keyframes left {
    0% {
      width: 0;
      opacity: 0;
    }
    50% {
      width: 50%;
      opacity: 0.4;
    }
    100% {
      width: 0%;
      opacity: 0;
    }
  }
  ::after,
  ::before {
    content: "";
    width: 50%;
    height: 100%;
    bottom: 0;
    position: absolute;
    opacity: 0.2;
    background: #fafafa;
  }
  ::after {
    border-radius: 0 4px 4px 0;
    left: 50%;
    animation: left 0.8s ease-in-out 1 alternate forwards;
  }
  ::before {
    border-radius: 4px 0 0 4px;
    right: 50%;
    animation: left 0.8s ease-in-out 1 forwards;
  }
`;
export const TabContent = styled("div")`
  padding: 20px 0;
`;
