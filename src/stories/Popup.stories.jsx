import React from 'react';

import Popup from './popup/Popup';

export default {
  title: 'Example/popup/Popup',
};

const TemplatePopup = () => <Popup />;

export const DefaultPopup = TemplatePopup.bind({});