import React from 'react';
//import PropTypes from 'prop-types';
import SideBar from './leftSideBar/SideBar';
import SubHeaderFull from './subHeader/SubHeaderFull';
import Tab from './tab/Tab';
import Pagination from './pagination/Pagination';

import './newPage.scss';

class NewPage extends React.Component {
    render() {
         return(
             <div className="wrapper--all">
                 <SideBar />
                 <SubHeaderFull />
                 <Tab />
                 <div className="pagination-position">
                     <Pagination />
                 </div>
             </div>
         );
    }
}

export default NewPage;
  