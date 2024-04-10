import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

function MessageModal({ isOpen, onClose }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Send message to the seller
    console.log("Sending message:", message);
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
            Send Message
          </Dialog.Title>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message..."
          ></textarea>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default MessageModal;
