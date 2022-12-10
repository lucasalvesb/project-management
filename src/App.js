import { Routes, Route, Navigate } from 'react-router-dom'

// styles
import './App.css'


// pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'


function App() {
  return (
    <div className="App">
      <Routes>
        <div className="container">
          <Route path="" element={<Home />}/>
          <Route path="/create" element={<Home />}/>
          <Route path="/project/:id" element={<Project />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </div>
      </Routes>
    </div>
  );
}

export default App
