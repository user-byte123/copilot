import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Transactions from './Transactions';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/transactions' element={<Transactions/>}/>
    </Routes>
  )
}

export default App;