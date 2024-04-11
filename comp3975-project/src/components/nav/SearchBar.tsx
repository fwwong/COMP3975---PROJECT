import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Instantiate useNavigate

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent form submission from reloading the page

        // Navigate to the /results route with the searchTerm as a query parameter
        navigate(`/results?term=${encodeURIComponent(searchTerm.trim())}`);
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Search"
                className="border-4 border-gray-300 p-4 rounded-lg w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white p-4 rounded-lg ml-2"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}


