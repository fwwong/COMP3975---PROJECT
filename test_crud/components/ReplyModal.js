import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

function ReplyModal({ isOpen, onClose }) {
  const [reply, setReply] = useState("");

  const handleSendReply = () => {
    // Send reply to the message
    console.log("Sending reply:", reply);
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
            Reply to Message
          </Dialog.Title>

          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your reply..."
          ></textarea>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSendReply}
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

export default ReplyModal;
