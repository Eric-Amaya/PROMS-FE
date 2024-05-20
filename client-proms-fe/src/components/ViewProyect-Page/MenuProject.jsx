import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import CronogramasIcon from '@mui/icons-material/CalendarToday';
import RecursosIcon from '@mui/icons-material/GroupWork';
import ParticipantesIcon from '@mui/icons-material/People';
import ProgresoIcon from '@mui/icons-material/Timeline';
import RendimientoIcon from '@mui/icons-material/TrendingUp';
import DocumentosIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Assignment';
import HistoryIcon from '@mui/icons-material/History';

import ButtonMenu from './ButtonMenu';

const MenuProject
 = () => {
  return (
    <AppBar position="sticky" sx = {{backgroundColor : "#0b3b62", height: '60px'}} >
      <Toolbar style={{ top: 0 }}>
        <Box display="flex" flexGrow={1} justifyContent="space-between">
            <ButtonMenu icon={TaskIcon} label="Tareas" to = "/view/task"/>
            <ButtonMenu icon={CronogramasIcon} label="Cronogramas" to = "/view/schedule"/>
            <ButtonMenu icon={RecursosIcon} label="Recursos" to = "/view/resource"/>
            <ButtonMenu icon={ParticipantesIcon} label="Participantes" to = "/view/participants"/>
            <ButtonMenu icon={ProgresoIcon} label="Progreso" to = "/view/progress"/>
            <ButtonMenu icon={RendimientoIcon} label="Rendimiento" to = "/view/performance"/>
            <ButtonMenu icon={DocumentosIcon} label="Documentos" to = "/view/document"/>
            <ButtonMenu icon={HistoryIcon} label="Versiones" to = "/view/version"/>
            <ButtonMenu icon={SettingsIcon} label="Configuración" to = "/view/setting"/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuProject;
