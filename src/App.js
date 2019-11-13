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
        role: 'Form Engineer'
      },
      {
        name: 'Bob',
        email: 'bob@email.com',
        role: 'CEO'
      }
    ]
  );

  const [memberToEdit, setMemberToEdit] = useState({});

  const addTeamMember = (newTeamMember) => {
    setTeamMembers([...teamMembers, newTeamMember]);
  }

  return (
    <div className="App">
      Team Members:
      <hr />
      <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit}/>
      <hr />
      {
        teamMembers.map(member => {
          return (
            <div>
              <h3>{member.name}</h3>
              <h3>{member.email}</h3>
              <h3>{member.role}</h3>
              <button onClick={() => setMemberToEdit({name: member.name, email:member.email, role:member.role})}>edit</button>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
