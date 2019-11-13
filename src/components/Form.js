import React, {useState, useEffect} from 'react';
import {Typography} from '@material-ui/core';

export default (props) => {
    const [newMember, setNewMember] = useState({name:'', email:'', role:'', id:-1});

    const handleChange = e => {
        setNewMember({...newMember, [e.target.name]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.memberToEdit.name !== '' ? props.editMember(newMember) : props.addTeamMember(newMember);
        setNewMember({name:'', email:'', role:'', id:-1});
    }

    useEffect(() =>{
        setNewMember(props.memberToEdit);
    }, [props.memberToEdit])

    return(
        <div>
            <Typography variant='h4'>Add / Edit</Typography>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <br />
                <input id='name' name='name' type='text' onChange={handleChange} value={newMember.name}/>
                <br />

                <label htmlFor='email'>Email</label>
                <br />
                <input id='email' name='email' type='email' onChange={handleChange} value={newMember.email}/>
                <br />

                <label htmlFor='role'>Role</label>
                <br />
                <input id='role' name='role' type='text' onChange={handleChange} value={newMember.role}/>

                <br />
                <button>Submit</button>
            </form>
        </div>
        
    )
}