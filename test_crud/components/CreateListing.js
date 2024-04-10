import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../stores/test_list_store";

function CreateListing() {
  const navigate = useNavigate();
  const addListing = useStore((state) => state.addListing);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: Date.now(),
      title,
      description,
    };
    addListing(newListing);
    navigate("/");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await api.post("/listings", { title, description });
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error creating listing:", error);
  //   }
  // };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Create Listing</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
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
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateListing;