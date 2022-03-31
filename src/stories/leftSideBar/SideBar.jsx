import React from 'react';
//import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,  faGear, faUser, faAppleWhole, faHelicopter, faFlag, faUserClock, faBullhorn,  } from '@fortawesome/free-solid-svg-icons';
import './sideBar.scss';
import { Dashboard } from '@mui/icons-material';


const Item = (props) => {
    return (
        <>
        <div className="sidebar-item">
            <div className="item-center">
                <FontAwesomeIcon icon={props.icontesting} className="fa-fw" />
            
            <a>{ props.texttitle }</a>
            </div>
        </div>
        </>
        
    )
}

const SideBarTitle = () => {
    return (
        <div className="sidebar-title">
            <span>UTMMMMM</span>
        </div>
    )
}

const SideBarFotter = () => {
    return (
        <>
        <div className="sidebar-fotter">
            <div className="item-center">
            <FontAwesomeIcon icon={faGear} className="fa-spin" />
            <a>Setting</a>
            </div>
        </div>
        </>
    )
}

class SideBar extends React.Component {
    render() {
        const texttitle = ["Dashboard", "Operations", "Applications", "Risk Alerts", "Vehicles", "Users", "Flight Reports", "Real-time"]
         return(
             <div className="sidebar-wrapper">
                 <SideBarTitle />
                 <div className="sidebar-item-wrapper"> 
                     <Item icontesting={faAppleWhole} texttitle={texttitle[0]}/>
                     <Item icontesting={faHouse} texttitle={texttitle[1]}/>
                     <Item icontesting={faHouse} texttitle={texttitle[2]}/>
                     <Item icontesting={faBullhorn} texttitle={texttitle[3]}/>
                     <Item icontesting={faHelicopter} texttitle={texttitle[4]}/>
                     <Item icontesting={faUser} texttitle={texttitle[5]}/>
                     <Item icontesting={faFlag} texttitle={texttitle[6]}/>
                     <Item icontesting={faUserClock} texttitle={texttitle[7]}/>
                 </div>
                <SideBarFotter />                 
             </div>

         );
    }
}

export default SideBar;
  