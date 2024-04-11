import React, { useState } from 'react';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent form submission from reloading the page
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage

        if (searchTerm.trim() === '') {
            // Perform GET request if search term is empty
            try {
                const response = await fetch('http://localhost:8888/api/posts', {
                    headers: {
                        'Content-Type': 'application/json',
                        // Include the Authorization header with the token
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data); // Here, you'd handle displaying the fetched data
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        } else {
            // Handle the case where there is a searchTerm provided
            console.log(`Search for: ${searchTerm}`);
            // Optionally, you could extend this to perform a search operation
        }
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

