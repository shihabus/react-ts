import React from "react";

type Props = {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Click Me</button>;
};

export { Button };
