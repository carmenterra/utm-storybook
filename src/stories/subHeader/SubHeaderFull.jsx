import React from 'react';
import './subHeader.scss';

import SubHeaderTop from './SubHeaderTop';
import SubHeaderSub from './SubHeaderSub';


class SubHeaderFull extends React.Component {
  render() {
    return (
      <>
        <SubHeaderTop />
        <SubHeaderSub />
      </>
    );
  }
}

export default SubHeaderFull;
