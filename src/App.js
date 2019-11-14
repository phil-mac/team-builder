import React, {useState} from 'react';
import {Container, Grid, Button, Typography} from '@material-ui/core';

import './App.css';
import Form from './components/Form';
import Navigation from './components/Navigation';
import TeamMembers from './components/MemberList';
import MemberList from './components/MemberList';


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
      <Navigation />
      <Container maxWidth='md' style={{paddingTop:'20px'}}>
        <Grid container spacing={6}>
          <Grid item xs='4'>
            <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} editMember={editMember}/>
          </Grid>
          <Grid item xs='8'>
            <MemberList teamMembers={teamMembers} setMemberToEdit={setMemberToEdit} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
