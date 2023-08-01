import React from "react";

interface MessagesContainerProps {
  children: React.ReactNode;
}

const MessagesContainer: React.FC<MessagesContainerProps> = ({ children }) => {
  return (
    <div
      className="w-full h-full py-10 px-5 flex flex-col-reverse overflow-y-scroll text-lg font-semibold leading-normal"
      id="scroll-incrementor"
    >
      <div
        className="mt-0 mb-auto font-normal [&>*]:translate-z-0"
        id="message-incrementor"
      >
        {children}
      </div>
    </div>
  );
};

export default MessagesContainer;
