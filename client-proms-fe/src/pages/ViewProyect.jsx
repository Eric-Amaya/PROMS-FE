import React, { useState } from 'react';
import { Container, Grid, Button, Typography, Box, IconButton } from '@mui/material';
import TaskColumn from '../components/TaskColumn';
import TaskForm from '../components/TaskForm';
import { DragDropContext } from '@hello-pangea/dnd';
import EditIcon from '../assets/EditIcon.png';

const initialTasks = {
  pending: [],
  inProgress: [],
  review: [],
  completed: [],
};

const ViewProyect = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = (task = null) => {
    setSelectedTask(task);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setSelectedTask(null);
    setIsFormOpen(false);
  };

  const addTask = (task) => {
    if(!task.id) {
      task.id = 'task_' + Math.random().toString(36).substr(2, 9);
    }
    setTasks((prevTasks) => ({
      ...prevTasks,
      pending: [...prevTasks.pending, task],
    }));
    closeForm();
  };

  const updateTask = (updatedTask) => {
    const columnKey = Object.keys(tasks).find((key) =>
      tasks[key].some((task) => task.id === updatedTask.id)
    );
    setTasks((prevTasks) => ({
      ...prevTasks,
      [columnKey]: prevTasks[columnKey].map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    }));
    closeForm();
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
  
    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;
  
    // Verificar si la columna de origen es la misma que la columna de destino
    if (sourceColumn === destinationColumn) {
      // Mover la tarea dentro de la misma columna
      const columnTasks = Array.from(tasks[sourceColumn]);
      const [movedTask] = columnTasks.splice(source.index, 1);
      columnTasks.splice(destination.index, 0, movedTask);
  
      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceColumn]: columnTasks,
      }));
    } else {
      // Mover la tarea entre columnas diferentes
      const sourceTasks = Array.from(tasks[sourceColumn]);
      const destinationTasks = Array.from(tasks[destinationColumn]);
      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);
  
      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceColumn]: sourceTasks,
        [destinationColumn]: destinationTasks,
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item >
            <Box display="flex" alignItems="center">
              <Typography variant="h4">Project Name</Typography>
              <IconButton style={{ marginLeft: '8px' }}>
                <img src={EditIcon} alt="Edit" style={{ width: '24px', height: '24px' }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">Asignar</Button>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h5" style = {{ marginBottom: '16px'}}>Tareas</Typography>
          <Grid container spacing={2} justifyContent="space-between">
            <TaskColumn
              columnId="pending"
              title="Pendientes"
              tasks={tasks.pending}
              onEdit={openForm}
              onUpdateTasks={(newTasks) => setTasks((prevTasks) => ({ ...prevTasks, pending: newTasks }))}
            />
            <TaskColumn
              columnId="inProgress"
              title="En proceso"
              tasks={tasks.inProgress}
              onEdit={openForm}
              onUpdateTasks={(newTasks) => setTasks((prevTasks) => ({ ...prevTasks, inProgress: newTasks }))}
            />
            <TaskColumn
              columnId="review"
              title="En revisión"
              tasks={tasks.review}
              onEdit={openForm}
              onUpdateTasks={(newTasks) => setTasks((prevTasks) => ({ ...prevTasks, review: newTasks }))}
            />
            <TaskColumn
              columnId="completed"
              title="Completadas"
              tasks={tasks.completed}
              onEdit={openForm}
              onUpdateTasks={(newTasks) => setTasks((prevTasks) => ({ ...prevTasks, completed: newTasks }))}
            />
          </Grid>
        </Box>

        <Box mt={4}>
          <Button variant="contained" onClick={() => openForm()}>Agregar</Button>
        </Box>

        {isFormOpen && (
          <TaskForm
            task={selectedTask}
            onClose={closeForm}
            onSave={selectedTask ? updateTask : addTask}
          />
        )}
      </Container>
    </DragDropContext>
  );
};

export default ViewProyect;
