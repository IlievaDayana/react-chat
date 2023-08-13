import React from "react";
import { ChatHeadProps } from "../interfaces";

const ChatHeading: React.FC<ChatHeadProps> = ({ config }) => {
  return (
    <div className="flex justify-between items-center py-3 px-5 h-fit bg-head shadow-head-shadow">
      <div className="relative flex items-center justify-between">
        <span className="rounded-full block overflow-hidden w-12 h-12 mr-2.5 relative">
          <img className="w-full h-full" src={config.image} alt="Profile" />
        </span>
        <span className="chat-widget__role text-left">
          <span className="relative font-semibold text-2xl before:absolute before:w-2.5 before:h-2.5 before:bottom-0 before:-right-2.5 before:z-10 before:rounded-full before:bg-head-status">{config.name}</span>
          <span className="block">{config.role}</span>
        </span>
      </div>
    </div>
  );
};

export default ChatHeading;
