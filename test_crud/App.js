import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListingDetails from './components/ListingDetails';
import CreateListing from './components/CreateListing';
import EditListing from './components/EditListing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          {/* Add navigation menu */}
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/edit-listing/:id" element={<EditListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
