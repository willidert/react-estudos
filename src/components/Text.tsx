import { useContext } from "react";
import { ExampleContext } from "../contexts/ExampleContext/ExampleContext";

export const Text = () => {
  const { name } = useContext(ExampleContext);
  return (
    <>
      <header>
        <h1>My app, {name}</h1>
      </header>
    </>
  );
};
