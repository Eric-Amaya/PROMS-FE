import React from 'react';
import { Grid, Paper, Typography,Button, Box } from '@mui/material';
import { Draggable, Droppable  } from '@hello-pangea/dnd';
//import CustomButton from '../styles/customButton';

const TaskColumn = ({ columnId, title, tasks, onEdit,onUpdateTasks }) => {
  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h7" style={{ fontFamily: 'Open Sans' }}>{title}</Typography>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <Paper
            ref={provided.innerRef}
            {...provided.droppableProps}
            p={2}
            style={{
              minHeight: '400px', 
              backgroundColor: '#f0f0f0',
            }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    mb={2}
                    p={2}
                    bgcolor="lightgrey"
                    borderRadius={1}
                  >
                    <Typography>{task.title}</Typography>
                    <Button onClick={() => onEdit(task)}>Editar</Button>
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Paper>
        )}
      </Droppable>
    </Grid>
  );
};

export default TaskColumn;
