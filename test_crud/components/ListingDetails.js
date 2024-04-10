import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MessageModal from "./MessageModal";
import ReplyModal from "./ReplyModal";
import RateSellerModal from "./RateSellerModal";
import LiveChatModal from "./LiveChatModal";
import useStore from "../stores/test_list_store";

function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listings = useStore((state) => state.listings);
  const deleteListing = useStore((state) => state.deleteListing);
  const listing = listings.find((listing) => listing.id === parseInt(id));
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [isRateSellerModalOpen, setIsRateSellerModalOpen] = useState(false);
  const [isLiveChatModalOpen, setIsLiveChatModalOpen] = useState(false);

  // useEffect(() => {
  //   fetchListing();
  // });

  // const fetchListing = async () => {
  //   try {
  //     const response = await api.get(`/listings/${id}`);
  //     setListing(response.data);
  //   } catch (error) {
  //     console.error("Error fetching listing:", error);
  //   }
  // };

  // const handleDelete = async () => {
  //   try {
  //     await api.delete(`/listings/${id}`);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error deleting listing:", error);
  //   }
  // };

  const handleDelete = () => {
    deleteListing(listing.id);
    navigate("/");
  };

  const openMessageModal = () => {
    setIsMessageModalOpen(true);
  };

  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
  };

  const openReplyModal = () => {
    setIsReplyModalOpen(true);
  };

  const closeReplyModal = () => {
    setIsReplyModalOpen(false);
  };

  const openRateSellerModal = () => {
    setIsRateSellerModalOpen(true);
  };

  const closeRateSellerModal = () => {
    setIsRateSellerModalOpen(false);
  };

  const openLiveChatModal = () => {
    setIsLiveChatModalOpen(true);
  };

  const closeLiveChatModal = () => {
    setIsLiveChatModalOpen(false);
  };

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">{listing.title}</h1>
        <p className="mb-6">{listing.description}</p>
        <div className="flex space-x-4">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
          <button
            onClick={() => navigate(`/edit-listing/${id}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit
          </button>
          <button
            onClick={openMessageModal}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Message
          </button>
          <button
            onClick={openReplyModal}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Reply
          </button>
          <button
            onClick={openRateSellerModal}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Rate Seller
          </button>
          <button
            onClick={openLiveChatModal}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Live Chat
          </button>
        </div>
      </div>

      <MessageModal isOpen={isMessageModalOpen} onClose={closeMessageModal} />
      <ReplyModal isOpen={isReplyModalOpen} onClose={closeReplyModal} />
      <RateSellerModal
        isOpen={isRateSellerModalOpen}
        onClose={closeRateSellerModal}
      />
      <LiveChatModal
        isOpen={isLiveChatModalOpen}
        onClose={closeLiveChatModal}
      />
    </div>
  );
}

export default ListingDetails;
