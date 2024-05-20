import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TeamList = ({ teams, onSelectTeam, onEditTeam, onDeleteTeam }) => {
    return (
        <List>
            {teams.map((team, index) => (
                <ListItem button key={index} onClick={() => onSelectTeam(team)}>
                    <ListItemText primary={team.name} secondary={team.type} />
                    <IconButton edge="end" onClick={() => onEditTeam(team)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => onDeleteTeam(team)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default TeamList;
