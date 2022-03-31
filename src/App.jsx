
import React, {Component} from 'react'
import './App.css';
import { ButtonExport } from './stories/Button';
import './fontawesome';
import DefaultTable from './stories/tables/DefaultTable';


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
