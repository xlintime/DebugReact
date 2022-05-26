import { useState } from "./whichReact";
import NewHookApi from "./pages/NewHookApi";

export default function App(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h3>App</h3>
      <button onClick={() => setCount(count + 1)}>App:{count}</button>

      {count % 2 ? <NewHookApi /> : null}
    </div>
  );
}
