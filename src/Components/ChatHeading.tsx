import React from "react";

interface ChatHeadProps {
  config: {
    image: string;
    name: string;
    role: string;
  };
}

const ChatHeading: React.FC<ChatHeadProps> = ({ config }) => {
  return (
    <div
      className="flex justify-between items-center py-3 px-5 h-fit"
      style={{
        boxShadow: "-1px 2px 5px 0 rgba(var(--zephyr,0,0,0), .1)",
      }}
    >
      <div className="relative flex items-center justify-between before:absolute before:w-2.5 before:h-2.5 before:bottom-0 before:left-9 before:z-10 before:rounded-full before:bg-green-500 ">
        <span className="rounded-full block overflow-hidden w-12 h-12 mr-2.5 relative">
          <img className="w-full h-full" src={config.image} alt="Profile" />
        </span>
        <span className="chat-widget__role text-left">
          <span className="font-semibold text-2xl">{config.name}</span>
          <span className="block">{config.role}</span>
        </span>
      </div>
    </div>
  );
};

export default ChatHeading;
