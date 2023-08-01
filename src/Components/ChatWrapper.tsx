import React, { useEffect, useState } from 'react';

interface ChatWrapperProps {
  children: React.ReactNode;
}

const ChatWrapper: React.FC<ChatWrapperProps> = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="flex justify-between flex-col text-zephyr bg-whisper m-auto pb-3 max-w-3xl" 
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default ChatWrapper;