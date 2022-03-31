import React from 'react';
import './propstesting.scss';


const ProfileHeader = () => {
  return (
    <thead>
        <tr>
          <th>名前</th>
          <th>血液型</th>
        </tr>
      </thead>
  )
}

function ProfileRow(props) {
  return (
    <div>
      <tbody>
        <tr>
        <td> { props.name }</td>
        <td> {props.type }</td>
        </tr>
      </tbody>
    </div>
  )
}


const PropsTesting = ({ text, backgroundColor, ...props}) => {
  const plofiles = [
      {id: 1, name: 'はるか', type: 'O型'},
      {id: 2, name: 'だいき', type: 'A型'},
      {id: 3, name: 'あい', type: 'B型'},
    ];
       return(
           <div>
             <ProfileHeader />
             {plofiles.map((profile) => <ProfileRow key={profile.id} name={profile.name} type={profile.type} />)}
           </div>
           
       );
}


export default PropsTesting;
