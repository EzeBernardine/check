/*
 * component: Custom Component
 * author: Eze Bernardine May
 * Date: June 23, 2020
 */

import React, { useState } from "react";
import propTypes from "prop-types";
import { TabWrapper, TabList, TabContent } from "./styles";
import Tab from "./Tab";
import { generateID } from "../../lib/generateID";

const Tabs = ({
  click,
  children,
  nonActiveColor,
  activeColor,
  bgColor,
  full,
}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    click(tab);
    setActiveTab(tab);
  };
  return (
    <TabWrapper activeColor={activeColor}>
      <TabList bgColor={bgColor}>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={generateID(15)}
              label={label}
              nonActiveColor={nonActiveColor}
              activeColor={activeColor}
              full={full}
              onClick={onClickTabItem}
            />
          );
        })}
      </TabList>
      <TabContent>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </TabContent>
    </TabWrapper>
  );
};

Tabs.propTypes = {
  children: propTypes.instanceOf(Array).isRequired,
};
export default Tabs;
