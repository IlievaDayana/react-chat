import React from "react";
import { WrapperContainerProps } from "../interfaces";

const WrapperContainer: React.FC<WrapperContainerProps> = ({
  children,
  containerId,
}) => {
  return (
    <div
      id={containerId || "chatbot-container"}
      className="fixed inset-0 z-50 overflow-hidden font-inherit pointer-events-auto bg-lumina"
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
