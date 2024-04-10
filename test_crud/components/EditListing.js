import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useStore from "../stores/test_list_store";

function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listings = useStore((state) => state.listings);
  const updateListing = useStore((state) => state.updateListing);
  const listing = listings.find((listing) => listing.id === parseInt(id));
  const [title, setTitle] = useState(listing.title);
  const [description, setDescription] = useState(listing.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedListing = {
      ...listing,
      title,
      description,
    };
    updateListing(updatedListing);
    navigate(`/listing/${id}`);
  };

  // const { id } = useParams();
  // const navigate = useNavigate();
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  // useEffect(() => {
  //   fetchListing();
  // });

  // const fetchListing = async () => {
  //   try {
  //     const response = await api.get(`/listings/${id}`);
  //     setTitle(response.data.title);
  //     setDescription(response.data.description);
  //   } catch (error) {
  //     console.error("Error fetching listing:", error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await api.put(`/listings/${id}`, { title, description });
  //     navigate(`/listing/${id}`);
  //   } catch (error) {
  //     console.error("Error updating listing:", error);
  //   }
  // };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Edit Listing</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditListing;