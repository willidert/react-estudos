import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { ExampleProvider } from "./contexts/ExampleContext/ExampleContext";

function App() {
  return (
    <ExampleProvider>
      <Text />
      <section>
        <article>
          <Button name="Will" />
          <Button name="Teste" />
          <Button name="Paçoca" />
        </article>
      </section>
    </ExampleProvider>
  );
}

export default App;
