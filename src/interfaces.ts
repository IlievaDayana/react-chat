import React, { KeyboardEvent } from "react";

export interface ChatHeadProps {
  config: {
    image: string;
    name: string;
    role: string;
  };
}

export interface ChatWrapperProps {
  children: React.ReactNode;
}

export interface InitiatorProps {
  config: {
    image: string;
    name: string;
    role: string;
    welcome: string;
  };
}

export interface InputProps {
  id: string;
  minLength: number;
  name: string;
  autoFocus: boolean;
  type: string;
  placeholder: string;
  onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export interface WrapperContainerProps {
  children: React.ReactNode;
  containerId?: string;
}

export interface MessagesContainerProps {
  children: React.ReactNode;
}
