import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

function RateSellerModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);

  const handleRateSeller = () => {
    // Rate the seller
    console.log("Rating seller:", rating);
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
          <Dialog.Title className="text-xl font-bold mb-4">
            Rate Seller
          </Dialog.Title>

          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                } focus:outline-none`}
              >
                &#9733;
              </button>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleRateSeller}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default RateSellerModal;
