import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';

const CreateTeam = ({ onSaveTeam, team, participants }) => {
    const [name, setName] = useState(team ? team.name : '');
    const [type, setType] = useState(team ? team.type : '');
    const [selectedParticipants, setSelectedParticipants] = useState(team ? team.participants : []);

    const handleSave = () => {
        const newTeam = { id: team ? team.id : Date.now(), name, type, participants: selectedParticipants };
        onSaveTeam(newTeam);
    };

    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField
                label="Nombre del Equipo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Tipo"
                value={type}
                onChange={(e) => setType(e.target.value)}
                fullWidth
                margin="normal"
                select
            >
                <MenuItem value="Desarrollo">Desarrollo</MenuItem>
                <MenuItem value="Diseño">Diseño</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
            </TextField>
            <TextField
                label="Agregar Participantes"
                select
                fullWidth
                margin="normal"
                SelectProps={{
                    multiple: true,
                    value: selectedParticipants,
                    onChange: (e) => setSelectedParticipants(e.target.value),
                    renderValue: (selected) => selected.map(p => p.name).join(', '),
                }}
            >
                {participants.map((participant, index) => (
                    <MenuItem key={index} value={participant}>
                        {participant.name} ({participant.email})
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
                {team ? 'Guardar Cambios' : 'Crear Equipo'}
            </Button>
        </Box>
    );
};

export default CreateTeam;
