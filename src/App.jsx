
import React, {Component} from 'react'
import './App.css';
import  NewPage from './stories/NewPage';
import  PropsTesting from './stories/PropsTesting';
import SideBar from './stories/leftSideBar/SideBar';
import Popup from './stories/popup/Popup';
import { ButtonExport } from './stories/Button';
import './fontawesome';
import DefaultTable from './stories/tables/DefaultTable';
import ApiFetch from './ApiFetch';


class App extends Component {
  render() {
  return (
    <div>
      <ButtonExport
  backgroundColor="#5C50BF"
  label="Button"
  onClick={() => {}}
/>
    <DefaultTable />
    </div>
  );
  }
}

export default App;
