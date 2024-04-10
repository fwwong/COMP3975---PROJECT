import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      {/* Define routes for Login and Home components */}
      <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
