import React, {useState} from 'react';
import logo from './logo.svg';

import './App.css';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState(
    [
      {
        name: 'Phil',
        email: 'philmac@email.com',
        role: 'Form Engineer',
        id: 0
      },
      {
        name: 'Bob',
        email: 'bob@email.com',
        role: 'CEO',
        id: 1
      }
    ]
  );

  const [memberToEdit, setMemberToEdit] = useState({name:'', email:'', role:'', id:-1});

  const addTeamMember = (newTeamMember) => {
    newTeamMember.id = teamMembers.length;
    setTeamMembers([...teamMembers, newTeamMember]);
  }

  const editMember = (updatedMember) => {
    const updatedTeamMembers = teamMembers.map(member => {
      if (member.id === updatedMember.id){
        return updatedMember;
      }else{
        return member;
      }
    })

    setTeamMembers([...updatedTeamMembers]);
    setMemberToEdit({name:'', email:'', role:''});
  }

  return (
    <div className="App">
      Team Members:
      <hr />
      <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} editMember={editMember}/>
      <hr />
      {
        teamMembers.map(member => {
          return (
            <div>
              <h3>{member.name}</h3>
              <h3>{member.email}</h3>
              <h3>{member.role}</h3>
              <button onClick={() => setMemberToEdit(member)}>edit</button>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
