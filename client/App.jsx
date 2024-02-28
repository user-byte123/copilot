import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function app() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}/>
    </Routes>
  )
}

export default app

