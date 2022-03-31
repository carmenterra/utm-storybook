import React from 'react';
import OutlinedButton from './button/OutlinedButton';

export default {
  title: 'Example/button/outlinedButton',
  argTypes: {
    backgroundColor: { control: 'color'},
  },
};

export const TemplateOutlinedButton = (args) => <OutlinedButton {...args} />;

export const TestingButton = TemplateOutlinedButton.bind({});
TestingButton.args = {
  text: 'Testing',
  backgroundColor: '#000000',
};

