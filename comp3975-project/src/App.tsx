import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/nav/Navbar';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import ProfilePage from './components/ProfilePage';
import CreateListing from './components/CreateListing';
import MarketplaceResults from './components/Results';
import PostDetails from './components/PostDetails';

function App() {
  const isAuthenticated = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true'
  return (
    <Router>
      {/* Define routes for Login and Home components */}
      <Routes>
      <Route path="/posts/:id" element={<PostDetails />} /> {/* Route for viewing post details */}
        <Route path= "/create-listing" Component={CreateListing}
        />
        <Route path= "/profile" Component={ProfilePage}
        />
        <Route path="/dashboard"
          
          element={isAuthenticated ? <Dashboard /> : <Navigate replace to="/login" />
          }
        /> 
        
        <Route path="/results" Component={MarketplaceResults} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate replace to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate replace to="/login" />}
        />        
        <Route path="/" Component={Home} />
        <Route
          path="/admin"
          element={isAdmin ? <Admin /> : <Navigate replace to={isAuthenticated ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
