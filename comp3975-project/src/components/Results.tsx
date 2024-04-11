import React, { useEffect, useState } from 'react';
import Navbar from './nav/Navbar';
import SearchBar from './nav/SearchBar';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Categories from './test_data/Categories';

interface Listing {
  id: number;
  title: string;
  description: string;
  price: string;
}

const MarketplaceResult: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:8888/api/posts', {
          headers: {
            'Content-Type': 'application/json',
            // Include the Authorization header if your API requires authentication
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }

        const data = await response.json();
        setListings(data); // Assuming the response data is in the format that matches the Listing[] type
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <Navbar />
      <div className='p-10'>
        <h1 className="text-2xl font-bold mb-4 text-center">Marketplace Results</h1>
        <SearchBar />
        <Categories />
        <div className="max-w-4xl mx-auto p-4 grid grid-cols-3 gap-4">
          {listings.map(listing => (
            <div key={listing.id} className="border border-gray-200 rounded-lg p-4">
              <FontAwesomeIcon icon={faImage} className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
              <p className="text-gray-600 mb-2">{listing.description}</p>
              <p className="text-blue-500 font-bold">{listing.price}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketplaceResult;

