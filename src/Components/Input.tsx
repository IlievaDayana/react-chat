import React, { FC, KeyboardEvent } from 'react';

interface InputProps {
  id: string;
  minLength: number;
  name: string;
  autoFocus: boolean;
  type: string;
  placeholder: string;
  onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ id, minLength, name, autoFocus, type, placeholder, onKeyUp }) => (
  <input
    id={id}
    minLength={minLength}
    name={name}
    autoFocus={autoFocus}
    type={type}
    placeholder={placeholder}
    onKeyUp={onKeyUp}
  />
);

export default Input;