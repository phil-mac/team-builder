import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components';

export default () =>{
    const TeamAppBar = styled(AppBar)`&&{
        Button{
            margin: 0 20px;
        }
    }`

    return(
        <TeamAppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" className='title'>
                Team Builder
                </Typography>
                {/* <Button color="inherit">Team A</Button>
                <Button color="inherit">Team B</Button>
                <Button color="inherit">Team C</Button>
                <IconButton edge="start" className='addTeamButton' color="inherit" aria-label="menu">
                    <AddIcon />
                </IconButton> */}
            </Toolbar>
        </TeamAppBar>
    )
    
}