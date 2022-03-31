import React from 'react';
import PropTypes from 'prop-types';
import './tab.scss';

const TabItem = (props) => {
    return(
    <li className="tab">
        <div className="position">
            <a>{props.tab_item_total}</a>
            <p>{props.tab_item_title}</p>
    </div>
    </li>
    )
}

export default TabItem;


  