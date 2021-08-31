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
    const childrenCopy = [];
    children.filter(x => x !== null).map(child => {
        if(Array.isArray(child)){
            child.map(_child =>{
                    if(Array.isArray(_child)) {
                        _child?.props?.children.map(__child =>  childrenCopy.push(__child))
                    } else {
                        childrenCopy.push(_child)
                    }
                })
        }else{
            childrenCopy.push(child)
        }
    })

  const [activeTab, setActiveTab] = useState(childrenCopy[0].props.label);

  const onClickTabItem = (tab, idx) => {
    click(childrenCopy[idx].props.value);
    setActiveTab(tab);
  };
  return (
    <TabWrapper activeColor={activeColor}>
      <TabList bgColor={bgColor}>
        {childrenCopy.filter(x => x !== null).map((child, idx) => {
            
          const label = child && child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={generateID(15)}
              label={label?.label }
              nonActiveColor={nonActiveColor}
              activeColor={activeColor}
              full={full}
              onClick={(tab) => onClickTabItem(tab, idx)}
            />
          );
        })}
      </TabList>
      <TabContent>
        {childrenCopy.filter(x => x !== null).map((child) => {
          if (child?.props?.label !== activeTab) return undefined;
          return child?.props.children;
        })}
      </TabContent>
    </TabWrapper>
  );
};

Tabs.propTypes = {
  children: propTypes.instanceOf(Array).isRequired,
};
export default Tabs;
