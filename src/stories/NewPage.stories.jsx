import React from 'react';

import NewPage from './NewPage';

export default {
  title: 'Example/NewPage',
};

const TemplateNewPage = () => <NewPage />;

export const DefaultNewPage = TemplateNewPage.bind({});