import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App;