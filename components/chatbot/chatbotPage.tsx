"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import Chatbot from "./chatbot";
import { useState } from "react";

const ChatBotPage = () => {
  const [chatbotOpen, toggleChatbotOpen] = useState(false);
  return (
    <div>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => toggleChatbotOpen(!chatbotOpen)}
          className="bg-purple-600 text-white rounded-full p-4 mb-1 shadow-lg hover:bg-purple-900 focus:outline-none focus:ring-2 transition duration-300" // <-- Added `mb-1` to prevent 'x' overlap with the chatbot
        >
          {/* You can add an icon inside the button if needed */}
          {chatbotOpen ? (
            <p className="font-bold">X</p>
          ) : (
            <MessageSquare className="w-5 h-5" />
          )}
        </Button>

        {chatbotOpen && <Chatbot />}
      </div>
    </div>
  );
};

export default ChatBotPage;
