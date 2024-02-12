import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  buttonType: string;
  onClick?: () => void;
}

const Button = ({ children, buttonType, onClick }: Props) => {
  return <button className={"btn btn-" + buttonType}>{children}</button>;
};

export default Button;
