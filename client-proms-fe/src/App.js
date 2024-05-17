import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewProyect from './pages/ViewProyect';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/view" element = {<ViewProyect/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
