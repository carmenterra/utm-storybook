import React from 'react';
import './table.scss';

import Severity from './severity/Severity';
import { IconButton } from '@mui/material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCaretDown, faCaretUp, faMessage } from '@fortawesome/free-solid-svg-icons';

function createData(alertId, category, message, severity, parties, status, timeDetected) {
  return {
    alertId,
    category,
    message,
    severity,
    parties,
    status,
    timeDetected,
    history: [
      {
        time: "07:43;01",
        severity: "None",
        status: "Detected",
        condition: "DST<9km, SPD>=1km/h"
      },
      {
        time: "07:43;01",
        severity: "None",
        status: "Detected",
        condition: "DST<9km, SPD>=1km/h"
      },
      {
        time: "07:43;01",
        severity: "None",
        status: "Detected",
        condition: "DST<9km, SPD>=1km/h"
      },
    ],
  };
}

const MiniTableHeader = () => {
  return (
    <thead className="table-header">
      <tr className="table-header-bg">
            <th className="icon-size"><FontAwesomeIcon icon={faCaretDown}/></th>
            <th>AlertId</th>
            <th>Category</th>
            <th>Message</th>
            <th>Severity</th>
            <th>Parties</th>
            <th>Status</th>
            <th>Time Detected</th>
            <th className="icon-siz">-</th>
            <th className="icon-siz">-</th>
          </tr>
    </thead>
  )
}

const SubMiniTableHeader = () => {
  return (
    <thead className="table-header">
      <tr className="table-header-bg">
            <th className="icon-size"><FontAwesomeIcon icon={faCaretDown}/></th>
            <th>Time</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Condition</th>
          </tr>
    </thead>
  )
}

const MiniTableBody = (props) => {
  const [open, setOpen] = React.useState(false);
  const deleteAircraft = () => {
    alert("削除しますか？")
  }
  const edit = () => {
    alert('編集しますか？')
  }
  return (
      <tbody className="table-body">
        <tr className="spacing-bottom">
          <td className="icon-size">
            <IconButton>
            <FontAwesomeIcon icon={faCaretDown} onClick={()=> setOpen(!open)}>
              {open ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp}/>}
            </FontAwesomeIcon> 
              <SubMiniTable />
            </IconButton>
          </td>
          <td>{ props.alert_id }</td>
          <td>{ props.category }</td>
          <td>{ props.message }</td>
          <td>{ props.severity }<Severity/></td>
          <td>{ props.parties }</td>
          <td>{ props.status }</td>
          <td>{ props.time_detected }</td>
          <td { ...props.id } className="icon-size">
            <FontAwesomeIcon icon={faExclamationCircle} onClick={edit}/>
          </td>
          <td { ...props.id } className="icon-size">
            <FontAwesomeIcon icon={faMessage} onClick={deleteAircraft}/>
          </td>
        </tr>
      </tbody>
  )
}


const SubMiniTableBody = (props) => {
  return (
      <tbody className="table-body">
        <tr className="spacing-bottom">
          <td className="icon-size"><FontAwesomeIcon icon={faCaretDown}/></td>
          <td>{ props.time }</td>
          <td>{ props.severity }<Severity/></td>
          <td>{ props.status }</td>
          <td>{ props.condition }</td>
        </tr>
      </tbody>
  )
}


const MiniTableRow = () => {
  const rows = [
    {id: 1, alert_id: "#3EB98ADA", category:"HELICOPTER_COLLISION", message: "Detected collision risk b/wHelicopter and drone", severity: "None", parties: "JA0000CCC001", status:"Resolved", time_detected: "2022-03-07" },
    {id: 2, alert_id: "#3EB98ADA", category:"HELICOPTER_COLLISION", message: "Detected collision risk b/wHelicopter and drone", severity: "None", parties: "JA0000CCC001", status:"Resolved", time_detected: "2022-03-07" },
    {id: 3, alert_id: "#3EB98ADA", category:"HELICOPTER_COLLISION", message: "Detected collision risk b/wHelicopter and drone", severity: "None", parties: "JA0000CCC001", status:"Resolved", time_detected: "2022-03-07" },
    {id: 4, alert_id: "#3EB98ADA", category:"HELICOPTER_COLLISION", message: "Detected collision risk b/wHelicopter and drone", severity: "None", parties: "JA0000CCC001", status:"Resolved", time_detected: "2022-03-07" },
    {id: 5, alert_id: "#3EB98ADA", category:"HELICOPTER_COLLISION", message: "Detected collision risk b/wHelicopter and drone", severity: "None", parties: "JA0000CCC001", status:"Resolved", time_detected: "2022-03-07" }

  ]
  return (
    <>
      {rows.map((row) => <MiniTableBody key={row.id} alert_id={row.alert_id} category={row.category} message={row.message} severity={row.severity} parties={row.parties} status={row.status} time_detected={row.time_detected} />)}
    </>

  )
}

const SubMiniTableRow = () => {
  const rows = [
    {id: 1, time: "07:43;01", severity:"None", status: "Detected", condition: "DST<9km, SPD>=1km/h" },
    {id: 2, time: "07:43;01", severity:"None", status: "Detected", condition: "DST<9km, SPD>=1km/h" },
    {id: 3, time: "07:43;01", severity:"None", status: "Continuing", condition: "DST<9km, SPD>=1km/h" },
    {id: 4, time: "07:43;01", severity:"None", status: "Detected", condition: "DST<9km, SPD>=1km/h" },
    {id: 5, time: "07:43;01", severity:"None", status: "Detected", condition: "DST<9km, SPD>=1km/h" },
  ]
  return (
    <>
      {rows.map((row) => <SubMiniTableBody key={row.id} time={row.time} severity={row.severity} status={row.status} condition={row.condition} />)}
    </>

  )
}

class SubMiniTable extends React.Component {
  render() {
       return(
         <table className="table-layout">
             <SubMiniTableHeader />
             <SubMiniTableRow />
         </table>
       );
  }
}

class MiniTable extends React.Component {
    render() {
         return(
           <table className="table-layout">
               <MiniTableHeader />
               <MiniTableRow />
           </table>
         );
    }
}

export default MiniTable;