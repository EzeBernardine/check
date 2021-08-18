import React, { useState } from "react";

import Tabs from "./index";

const Tab = ({ nonActiveColor, activeColor, bgColor, full }) => {
  const [, setTabType] = useState("Profile Update"); //for tab section

  return (
    <Tabs
      click={(tab) => setTabType(tab)}
      nonActiveColor={nonActiveColor}
      activeColor={activeColor}
      bgColor={bgColor}
      full={full}
    >
      <div label="Profile">Item 1</div>
      <div label="Security">Item 2</div>
      <div label="Account Verification">Item 3</div>
      <div label="Notification">Item 5</div>
    </Tabs>
  );
};

export default {
  title: "Tabs",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const _Tabs = Template.bind({});

_Tabs.args = {
  nonActiveColor: "#b9a694",
  activeColor: "blue",
  bgColor: "white",
  full: true,
};
