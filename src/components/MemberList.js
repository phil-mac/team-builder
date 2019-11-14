import React from 'react';
import {Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Grid, Button, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';

export default (props) => {
  return (
    <Paper style={{padding:'20px'}}>
        <Typography variant='h4' style={{paddingBottom:'15px'}}>Members</Typography>
        <Paper style={{overflowX: 'auto'}}>
            <Table aria-label="simple table" >
                <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.teamMembers.map(member => (
                    <TableRow key={member.name}>
                        <TableCell>
                            <IconButton 
                                onClick={() => {
                                    props.setMemberToEdit(member)
                                    props.handleClickOpen();
                                }} 
                                edge="start" 
                                color="inherit" 
                                aria-label="edit"
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {member.name}
                        </TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>{member.role}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
        <Grid container justify='center'>
            <Grid item>
                <Fab onClick={props.handleClickOpen} color="primary" aria-label="add" style={{margin:'20px 0'}} >
                    <AddIcon />
                </Fab>  
            </Grid>
        </Grid>
    </Paper>
  );
}