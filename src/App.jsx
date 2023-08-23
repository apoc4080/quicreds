import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import StudentExpenses from './Components/StudentExpenses';
import UpdateCollegeDetails from './Components/UpdateCollegeDetails';

function App() {
  const authed = true;

  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar />
        <div className="content">
          {authed && (
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/expenses" element={<StudentExpenses />} />
              <Route path="/details" element={<UpdateCollegeDetails />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
