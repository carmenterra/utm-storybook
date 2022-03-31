import React from 'react';

import SideBarItem from './leftSideBar/SideBarItem';

export default {
  title: 'Example/SideBar/SideBarItem',
};

const TemplateSideBarItem = () => <SideBarItem />;

export const nonActive = TemplateSideBarItem.bind({});

export const active = TemplateSideBarItem.bind({});
