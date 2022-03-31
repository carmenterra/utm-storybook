import React from 'react';

import Pagination from './pagination/Pagination';

export default {
  title: 'Example/Pagination',
};

const TemplatePagination = () => <Pagination />;

export const DefaultPagination = TemplatePagination.bind({});