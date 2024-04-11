import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './nav/Navbar';

interface ListingFormState {
  title: string;
  description: string;
  price: string;
  category: string;
  image: File | null; // Add image field to store the selected file
}

const CreateListing: React.FC = () => {
  const [formState, setFormState] = useState<ListingFormState>({
    title: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Create FormData object to send the form data including the image
      const formData = new FormData();
      formData.append('title', formState.title);
      formData.append('description', formState.description);
      formData.append('category_id', formState.category);
      formData.append('price', formState.price);
      if (formState.image) {
        formData.append('image', formState.image);
      }

      const response = await fetch('http://localhost:8888/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create the listing');
      }

      // Reset form state and navigate to homepage upon success
      setFormState({
        title: '',
        description: '',
        price: '',
        category: '',
        image: null,
      });
      navigate('/');
    } catch (error) {
      console.error('Error creating listing:', error);
      setError('Failed to create the listing');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormState((prevState) => ({ ...prevState, image: file }));
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Create a New Listing</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
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
              <option value="Furniture">Fashion</option>
              <option value="Vehicles">Home & Garden</option>
              <option value="Services">Books</option>
              <option value="Services">Toys & Games</option>
              <option value="Services">Sports & Outdoors</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
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
