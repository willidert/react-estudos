import { createContext, ReactNode, useState } from "react";

interface ExampleContextData {
  name: string | null;
  handleClick(value: string): void;
}

export const ExampleContext = createContext<ExampleContextData>(
  {} as ExampleContextData
);

interface Props {
  children: ReactNode;
}

export const ExampleProvider = ({ children }: Props) => {
  const [name, setName] = useState(
    !!localStorage.getItem("name") ? localStorage.getItem("name") : ""
  );

  const handleClick = (value: string) => {
    setName(value);
    localStorage.setItem("name", value);
  };
  return (
    <ExampleContext.Provider value={{ name, handleClick }}>
      {children}
    </ExampleContext.Provider>
  );
};
