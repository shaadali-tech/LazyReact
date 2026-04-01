import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCount] = useState(0);
  const [inputvalue, setInput] = useState(0);

  const expensiveComputation = () => {
    console.log("Running expensive computation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {}
    return result * 2;
  };

  const memoizedComputation = useMemo(() => expensiveComputation(), []);
  const computedValue = memoizedComputation;

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCount(counter + 1)}>Increment</button>
      <button onClick={() => setCount(counter - 1)}>Decrement</button>
      <p>Computed Value: {computedValue}</p>
      <input
        type="number"
        value={inputvalue}
        onChange={(e) => setInput(Number(e.target.value))}
      />
    </>
  );
}

export default App;
