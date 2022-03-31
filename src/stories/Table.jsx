import React from 'react';
import './table.scss';

import detailIcon from './assets/detail.svg';
import editIcon from './assets/edit.svg';
import warningIcon from './assets/warning.svg';
import arrowIcon from './assets/arrow.svg';
import PropsTesting from './PropsTesting';

//Table Header
const TableHeader = () => {
  return (
    <thead>
      <tr className="table-header-bg">
            <th><input type="checkbox" /></th>
            <th classNsame="table-bg">
              <div className="text-center">Call sign</div>
            </th>
            <th classNsame="table-bg">Operation
            <img src={ arrowIcon } alt="Icon" />
            </th>
            <th>Date Time</th>
            <th>Location</th>
            <th>Vehicle</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>...</th>
            <th>...</th>
            <th>...</th>
            <th>詳細</th>
          </tr>
    </thead>
  )
}

//one row of table body

const TableRow = () => {
  return (
    <tr className="spacing-bottom">
    <td><input type="checkbox" /></td>
    <td>
      <div className="image-box">
      </div>
    </td>
    <td>test-pilot@aaa.co.jp</td>
    <td>2022-01-01</td>
    <td>Shibuya, Tokyo</td>
    <td>Matrice 300 RTK</td>
    <td>xxxxx</td>
    <td>Active</td>
    <td>Icon</td>
    <td><img src={ warningIcon } alt="Icon" /></td>
    <td><img src={ editIcon } alt="Icon" /></td>
    <td><img src={ detailIcon } alt="Icon"/></td>
  </tr>

  )
}

//one row of table body testttttttttttttt

const TableRowTest = (props) => {
  return (
      <tbody>
        <tr className="spacing-bottom">
          <td><input type="checkbox" /></td>
          <td>
            <div className="image-box">
            </div>
          </td>
          <td>{ props.started_at }</td>
          <td>{ props.ended_at }</td>
          <td>{ props.tookoff_location }</td>
          <td>{ props.landed_location }</td>
          <td>{ props.volume }</td>
          <td>{ props.status }</td>
          <td>Icon</td>
          <td><img src={ warningIcon } alt="Icon" /></td>
          <td><img src={ editIcon } alt="Icon" /></td>
          <td><img src={ detailIcon } alt="Icon"/></td>
        </tr>
      </tbody>

  )
}


const TableRowTt = () => {
  const rows = [
    {id: 1, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    {id: 2, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    {id: 3, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    {id: 4, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    {id: 5, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    {id: 6, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" }
  ]
  return (
    <>
      {rows.map((row) => <TableRowTest key={row.id} plan_id={row.plan_id} call_sign={row.call_sign} started_at={row.started_at} ended_at={row.ended_at} tookoff_location={row.tookoff_location} landed_location={row.landed_location} volume={row.volume} status={row.status} created_at={row.created_at} updated_at={row.updated_at} />)}
    </>
  
  )
}

const TableBodyTest = () => {
  return (
      <>
        <TableRowTest />
      </>

  )
}


const TableBody = () => {
  return (
    <tbody>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </tbody>
  )
}

class Table extends React.Component {
  render() {
    return (
      <div className="container">
        <table className="table-wrapper">
          <TableHeader />
          <TableRowTt />
        </table>
      </div>
    );
  }
}

export default Table;
