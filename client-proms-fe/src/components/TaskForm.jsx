import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Typography, Grid } from '@mui/material';

const TaskForm = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [startDate, setStartDate] = useState(task ? task.startDate : '');
  const [endDate, setEndDate] = useState(task ? task.endDate : '');
  const [participants, setParticipants] = useState(task ? task.participants : '');
  const [resources, setResources] = useState(task ? task.resources : '');
  const [comments, setComments] = useState(task ? task.comments : '');

  const handleSave = () => {
    const newTask = {
      id: task ? task.id : Date.now(),
      title,
      description,
      startDate,
      endDate,
      participants,
      resources,
      comments,
    };
    onSave(newTask);
  };

  return (
    <Drawer anchor="right" open onClose={onClose}>
      <Box width={400} p={2}>
        <Typography variant="h6" style = {{marginBottom: '12px'}}>{task ? 'Editar Tarea' : 'Agregar Tarea'}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Fecha de inicio"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Fecha de termino"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Participantes"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Recursos"
              value={resources}
              onChange={(e) => setResources(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Comentarios"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" onClick={handleSave}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default TaskForm;
