import React from 'react';
//import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,  faGear } from '@fortawesome/free-solid-svg-icons';

import './sideBar.scss';


const SideBarItemRow = (props) => {
    return (
        <>
        <div className="sidebar-item">
            <div className="item-center">
            <FontAwesomeIcon icon={props.icontesting} />
            <a>Monitor</a>
            </div>
        </div>
        </>
    )
}

class SideBarItem extends React.Component {
    render() {
         return <SideBarItemRow icontesting={faHouse} />    }
}

export default SideBarItem;
  