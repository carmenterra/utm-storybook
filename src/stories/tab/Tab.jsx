import React from 'react';
import PropTypes from 'prop-types';
import './tab.scss';

import TabItem from './TabItem';
import addIcon from '../assets/add.svg';

const TabItems = () => {
    const rows = [
        {id: 1, tab_item_total: "77", tab_item_title: "Total alerts"},
        {id: 2, tab_item_total: "4", tab_item_title: "Continuing"},
        {id: 3, tab_item_total: "2", tab_item_title: "Corresponding"},
        {id: 4, tab_item_total: "6", tab_item_title: "Resolved"},
        {id: 5, tab_item_total: "40", tab_item_title: "Dismissed"},
        {id: 6, tab_item_total: "33", tab_item_title: "Closed"},
    ]
    return (
        <>
        {rows.map((row) => <TabItem key={row.id} tab_item_total={row.tab_item_total} tab_item_title={row.tab_item_title} />)}
     </>
    )
}


const Tab = ({ backgroundColor, ...props}) => {    
        return(
             <div>
                 <div className="tab-bg" style={backgroundColor && { backgroundColor }}
                    {...props}>
                     <div className="header">
                         <div className="header-item">
                             <a>New Operation</a>
                             <img src={ addIcon } alt="Icon"/>
                         </div>
                     </div>
                     <div className="tab-list">
                         <h3>Operations</h3>
                         <ul>
                            <TabItems />
                         </ul>
                     </div>
                 </div>
             </div>
         );
}

export default Tab;
