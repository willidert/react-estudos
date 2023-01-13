import { useContext } from "react";
import { ExampleContext } from "../contexts/ExampleContext/ExampleContext";

interface ButtonProps {
  name: string;
}

export const Button = (props: ButtonProps) => {
  const { handleClick } = useContext(ExampleContext);

  return (
    <div>
      <button onClick={() => handleClick(props.name)}>{props.name}</button>
    </div>
  );
};
