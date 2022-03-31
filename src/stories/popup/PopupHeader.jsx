import React from 'react';
import PropTypes from 'prop-types';
import './popup.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import  OutlinedButton  from '../button/OutlinedButton';

const PopupHeader = () => {
    return(
        <div>
            <div className="popup_text_style">
                <h3>Popup Title</h3>
            </div>
                <label for="trigger" className="close_btn popup_icon_style">
                    <FontAwesomeIcon icon={faCircleXmark} className="fa-sm fa-fw"/>
                </label>
        </div>
    )
}


export default PopupHeader;