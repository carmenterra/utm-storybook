import './tabpage.scss';

import React from 'react';
import PropTypes from 'prop-types';

import addIcon from '../assets/add.svg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabPageItem = (props) => {
    return(
    <TabList className="tab">
        <Tab className="position">
            <a>{props.tab_item_total}</a>
            <p>{props.tab_item_title}</p>
         </Tab>
         <TabPanel className='tab-page'>
             <span>{props.tab_page_text}</span>
         </TabPanel>
    </TabList>
    )
}

const TabPageItems = () => {
    const rows = [
        {id: 1, tab_item_total: "77", tab_item_title: "Total alerts", tab_page_text:"page1"},
        {id: 2, tab_item_total: "4", tab_item_title: "Continuing", tab_page_text:"page2"},
        {id: 3, tab_item_total: "2", tab_item_title: "Corresponding", tab_page_text:"page3"},
        {id: 4, tab_item_total: "6", tab_item_title: "Resolved", tab_page_text:"page4"},
        {id: 5, tab_item_total: "40", tab_item_title: "Dismissed", tab_page_text:"page5"},
        {id: 6, tab_item_total: "33", tab_item_title: "Closed", tab_page_text:"page6"},
    ]
    return (
        <>
        {rows.map((row) => <TabPageItem key={row.id} tab_item_total={row.tab_item_total} tab_item_title={row.tab_item_title} tab_page_text={row.tab_page_text} />)}
     </>
    )
}


const TabPage = ({ backgroundColor, ...props}) => {    
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
                     <Tabs className="tab-list">
                         <h3>Operations</h3>
                            <TabPageItems />
                     </Tabs>
                 </div>
             </div>
         );
}

export default TabPage;
