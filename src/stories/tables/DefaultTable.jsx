import React from 'react';
import './defaulttable.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBullhorn, faMessage, faPen } from '@fortawesome/free-solid-svg-icons';

const TestHeader = () => {
  return (
    <thead>
      <tr className="default-table-header-bg" >
            <th><input type="checkbox" /></th>
            <th classNsame="table-bg">
              <div className="text-center">Call sign</div>
            </th>
            <th classNsame="table-bg">Operation
            <FontAwesomeIcon icon={faCaretDown} />
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


const TestBody = (props) => {
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
          <td><FontAwesomeIcon icon={faBullhorn} /></td>
          <td><FontAwesomeIcon icon={faMessage} /></td>
          <td><FontAwesomeIcon icon={faPen} /></td>
        </tr>
      </tbody>

  )
}


const TableRow = () => {
  const rows = [
    {id: 1, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    //{id: 2, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    //{id: 3, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    //{id: 4, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    //{id: 5, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" },
    //{id: 6, plan_id: "001", call_sign: "AAA001" , started_at: "2022-01-01", ended_at: "2022-01-02", tookoff_location: "Shibuya, Tokyo", landed_location: "Shibuya, Tokyo", volume: "8/10", status: "Active", created_at: "2022-01-01", updated_at: "2022-01-02" }
  ]
  return (
    <>
      {rows.map((row) => <TestBody key={row.id} plan_id={row.plan_id} call_sign={row.call_sign} started_at={row.started_at} ended_at={row.ended_at} tookoff_location={row.tookoff_location} landed_location={row.landed_location} volume={row.volume} status={row.status} created_at={row.created_at} updated_at={row.updated_at} />)}
    </>
  
  )
}

const DefaultTable = () => {
    return (
      <div>
        <table className="default-table-wrapper">
          <TestHeader />
          <TableRow />
        </table>
      </div>
    );
}

DefaultTable.propTypes = {
  backgroundColor: null,
}

export default DefaultTable;
