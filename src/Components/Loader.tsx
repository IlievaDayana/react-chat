import React from "react";
import { WaveProps } from "../types";

const Wave: React.FC<WaveProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div className="relative text-center w-24 h-auto ml-6 space-x-1">
      <span className="inline-block w-3 h-3 rounded-full bg-opacity-40 animate-wave1 bg-black" />
      <span className="inline-block w-3 h-3 rounded-full bg-opacity-40 animate-wave2 bg-black" />
      <span className="inline-block w-3 h-3 rounded-full bg-opacity-40 animate-wave3 bg-black" />
    </div>
  );
};

export default Wave;
