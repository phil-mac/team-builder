import React, {useState, useEffect} from 'react';

export default (props) => {
    const [newMember, setNewMember] = useState({name:'', email:'', role:''});

    const handleChange = e => {
        setNewMember({...newMember, [e.target.name]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTeamMember(newMember);
        setNewMember({name:'', email:'', role:''});
    }

    useEffect(() =>{
        setNewMember(props.memberToEdit);
    }, [props.memberToEdit])

    

    return(
        <div>
            <h2>New Team Member Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input id='name' name='name' type='text' onChange={handleChange} value={newMember.name}/>

                <label htmlFor='email'>Email:</label>
                <input id='email' name='email' type='email' onChange={handleChange} value={newMember.email}/>

                <label htmlFor='role'>Role:</label>
                <input id='role' name='role' type='text' onChange={handleChange} value={newMember.role}/>

                <button>Add</button>
            </form>
        </div>
        
    )
}