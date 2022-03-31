import React from 'react';
import './subHeader.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faCirclePlus, faCircleUser} from '@fortawesome/free-solid-svg-icons';



class SubHeaderTop extends React.Component {
  render() {
    return (
      <div className="subHeader-bg">
          <div className="main-header">
            <div className="icon-color">
              <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
            </div>
            <div className="icon-color">
              <FontAwesomeIcon icon={faCircleUser} className="fa-xl fa-fw"/>
              <span><a>Hi, Text John</a></span>
              <FontAwesomeIcon icon={faBell}  aria-hidden="true" className="fa-xl fa-fw fa-ring animated"/>
              <FontAwesomeIcon icon={faCirclePlus}  aria-hidden="true"className="fa-xl fa-fw" />
            </div>
          </div>
      </div>
    );
  }
}

export default SubHeaderTop;
