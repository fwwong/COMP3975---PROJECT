import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';

function App() {
  const isAuthenticated = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');

  return (
    <Router>
      {/* Define routes for Login and Home components */}
      <Routes>
        <Route path="/login" Component={Login} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate replace to="/login" />}
        />        
        <Route path="/" Component={Home} />
        <Route
          path="/admin"
          element={isAdmin ? <Admin /> : <Navigate replace to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
