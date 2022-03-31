import React from 'react';

import DefaultTable from './tables/DefaultTable';


export default {
  title: 'Example/table',
  argsTypes: {
    backgroundColor: { control: 'color'},
  }
};

const TableAA = () => <DefaultTable />;

export const TableTemlate = TableAA.bind({});

const Testing = () => <DefaultTable />;

export const TestBg = Testing.bind({});