import React, {useState, useEffect} from 'react';
import {Typography, TextField, Paper, Button, Dialog} from '@material-ui/core';


export default (props) => {
    const [newMember, setNewMember] = useState({name:'', email:'', role:'', id:-1});

    const handleChange = e => {
        setNewMember({...newMember, [e.target.name]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (newMember.name !== ''){
            props.memberToEdit.name !== '' ? props.editMember(newMember) : props.addTeamMember(newMember);
            setNewMember({name:'', email:'', role:'', id:-1});
            handleClose();
        }
    }

    useEffect(() =>{
        setNewMember(props.memberToEdit);
    }, [props.memberToEdit])

    const handleClose = () => {
        props.onClose();
      };

    return(
        <Dialog onClose={handleClose} open={props.open}>
            <Paper style={{padding:'20px'}}>
                <Typography variant='h4'>Add / Edit</Typography>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        style={{width:'100%'}} 
                        value={newMember.name}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        name="email"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        style={{width:'100%'}} 
                        value={newMember.email}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        name='role'
                        label="Role"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        style={{width:'100%'}} 
                        value={newMember.role}
                    />
                    <Button variant='contained' color='primary' type='submit'>Add / Edit</Button>
                </form>
            </Paper>
        </Dialog>
        
        
    )
}