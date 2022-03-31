import React from 'react';
import PropTypes from 'prop-types';
import './popup.scss';

import PopupHeader from './PopupHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Button } from '@mui/material';
import  OutlinedButton  from '../button/OutlinedButton';



const PopupBody = () => {
    return(
        <div>
            <div className="popup-body">
                <div>

                </div>
            </div>
        </div>
    )
}

const Popup = () => {
    return(
        <div>
            <label for="trigger" className="open_btn">Button for Popup</label>
            <div className="popup_wrap">
                <input id="trigger" type="checkbox"/>
                <div className="popup_overlay">
                    <label for="trigger" className="popup_trigger"></label>
                        <div className="popup_content">
                            <PopupHeader />
                            <p>Popup question</p>
                            <div className="centering">
                                    <OutlinedButton >キャンセル</OutlinedButton>
                                    <OutlinedButton >OK</OutlinedButton>
    
                                    
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;