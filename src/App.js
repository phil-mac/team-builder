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

  const addTeamMember = (newTeamMember) => {
    setTeamMembers([...teamMembers, newTeamMember]);
  }

  return (
    <div className="App">
      Team Members:
      <hr />
      <Form addTeamMember={addTeamMember}/>
      <hr />
      {
        teamMembers.map(member => {
          return (
            <div>
              <h3>{member.name}</h3>
              <h3>{member.email}</h3>
              <h3>{member.role}</h3>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
