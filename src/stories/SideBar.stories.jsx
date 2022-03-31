import React from 'react';

import SideBar from './leftSideBar/SideBar';

export default {
  title: 'Example/SideBar',
};

const TemplateSideBar = () => <SideBar />;

export const DefaultSideBar = TemplateSideBar.bind({});
