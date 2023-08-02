import { FC } from "react";
import { InputProps } from "../interfaces";

const Input: FC<InputProps> = ({
  id,
  minLength,
  name,
  autoFocus,
  type,
  placeholder,
  onKeyUp,
}) => (
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
