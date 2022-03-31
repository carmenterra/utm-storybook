import React from 'react';

import Severity from './severity/Severity';

export default {
  title: 'Example/severity/Severity',
};

const TemplateSeverity = () => <Severity />;

export const DefaultSeverity = TemplateSeverity.bind({});