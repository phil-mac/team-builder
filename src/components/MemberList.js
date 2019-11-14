import React, {useState} from 'react';
import {Container, Grid, Button, Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export default (props) => {
  return (
    <Paper style={{padding:'20px'}}>
        <Typography variant='h4' style={{paddingBottom:'15px'}}>Members</Typography>
        <Paper>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.teamMembers.map(member => (
                    <TableRow key={member.name}>
                        <TableCell component="th" scope="row">
                            {member.name}
                        </TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>
                            <IconButton edge="start" color="inherit" aria-label="edit">
                                <EditIcon onClick={() => props.setMemberToEdit(member)}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
    </Paper>
  );
}