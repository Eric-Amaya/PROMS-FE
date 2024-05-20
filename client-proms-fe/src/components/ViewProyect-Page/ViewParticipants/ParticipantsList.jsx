import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDialog from './ConfirmDialog';

const ParticipantList = ({ participants, onRemoveParticipant }) => {
    const [participantToDelete, setParticipantToDelete] = useState(null); 
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleOpenDeleteDialog = (participant) => {
        setParticipantToDelete(participant); 
        setOpenDeleteDialog(true); 
    };

    const handleDeleteParticipant = () => {
        onRemoveParticipant(participantToDelete.index); 
        setOpenDeleteDialog(false); 
        setParticipantToDelete(null); 
    };

    return (
        <Box paddingTop="12px" 
            sx={{ 
                maxHeight: 350, 
                overflowY: 'auto', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', 
                borderRadius: '8px', 
                padding: '16px', 
                marginTop: '16px',
                marginBottom: '16px'
            }}
        >
            <List>
                {participants.map((participant, index) => (
                    <ListItem key={index}>
                        <ListItemText 
                            primary={participant.name} 
                            secondary={participant.email} 
                        />
                        <IconButton 
                            edge="end" 
                            onClick={() => handleOpenDeleteDialog({ index })} // Configura el participante a eliminar en el estado y abre el diálogo de confirmación
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <ConfirmDialog
                open={openDeleteDialog}
                onClose={() => setOpenDeleteDialog(false)}
                onConfirm={handleDeleteParticipant}
                title="Confirmar eliminación"
                description={`¿Estás seguro de que deseas eliminar al participante?`}
            />
        </Box>
    );
};

export default ParticipantList;
