import React from "react";

interface InitiatorProps {
  config: {
    image: string;
    name: string;
    role: string;
    welcome: string;
  };
}

const InitiatorProfile: React.FC<InitiatorProps> = ({ config }) => {
  return (
    <div className="mx-auto flex flex-col items-center pt-5 pb-10">
      <div className="text-center mx-7.5 mb-7.5 max-w-sm flex flex-col">
        <span className="text-center mx-7.5 mb-7.5 max-w-sm">{config.welcome}</span>
        <span className="w-15 h-15 overflow-hidden relative inline-block m-auto rounded-full">
          <img src={config.image} alt="image" />
        </span>
        <span className="w-start-profile">
          <div className="text-2xl font-semibold">{config.name}</div>
          <div className="w-role">{config.role}</div>
        </span>
      </div>
    </div>
  );
};

export default InitiatorProfile;
