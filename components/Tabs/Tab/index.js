import React from "react";
import propTypes from "prop-types";
import { ListItem, Animate } from "../styles";

const Tab = ({
  activeTab,
  label,
  onClick,
  nonActiveColor,
  full,
  activeColor,
}) => {
  const onClickTab = () => onClick(label);

  return (
    <ListItem
      className={activeTab === label ? "tab-list-active" : ""}
      onClick={onClickTab}
      nonActiveColor={nonActiveColor}
      activeColor={activeColor}
      full={full}
    >
      {label}
      {activeTab === label ? <Animate></Animate> : null}
    </ListItem>
  );
};

Tab.propTypes = {
  activeTab: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
export default Tab;
