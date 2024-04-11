import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './nav/Navbar';

// You can extend this interface if you plan to add more fields to your form
interface ListingFormState {
  title: string;
  description: string;
  price: string;
  category: string; // Renamed to match the expected backend payload
}

const CreateListing: React.FC = () => {
  const [formState, setFormState] = useState<ListingFormState>({
    title: '',
    description: '',
    price: '',
    category: '', // Default category_id can be an empty string or a default value
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8888/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as needed, for example, authorization headers
        },
        body: JSON.stringify({
          title: formState.title,
          description: formState.description,
          // Ensure to convert or pass the price if your backend expects it
          category_id: formState.category,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create the listing');
      }

      // Handle success response, such as navigating to a different page or showing a success message
      console.log('Listing created successfully');
      navigate('/'); // Redirect to the homepage or another page
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Create a New Listing</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formState.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formState.price}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <select
              id="category"
              name="category"
              value={formState.category}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Services">Services</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
      </div>
        );
    
}

export default CreateListing;


