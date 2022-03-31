import React from 'react';
import './subHeader.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCalendar, faBars, faGripVertical, faAngleDown } from '@fortawesome/free-solid-svg-icons';



class SubHeaderSub extends React.Component {
  render() {
    return (
      <div className="subHeader-sub-bg">
          <div className="sub-header">
            <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass}  aria-hidden="true" />
              <label>
                <input type="text" placeholder='Search'/>
              </label>
            </div>
            <div className="icon-color">
              <span>
                <a>show:All</a>
                <FontAwesomeIcon icon={faAngleDown} className="fa-sm fa-fw"/>
              </span>
              <FontAwesomeIcon icon={faCalendar} className="fa-xl fa-fw"/>
              <FontAwesomeIcon icon={faBars} className="fa-xl fa-fw"/>
              <FontAwesomeIcon icon={faGripVertical} className="fa-xl fa-fw"/>
            </div>
          </div>
      </div>
    );
  }
}

export default SubHeaderSub;
