import { useStore } from "../store";
import {
  useId,
  useSyncExternalStore,
  useInsertionEffect,
  useState,
  useEffect,
  useLayoutEffect,
} from "../whichReact";

// function css() {
//   // <link rel="stylesheet">
// }

function css(rule = "box") {
  //   if (!isInserted.has(rule)) {
  // isInserted.add(rule);
  //   document.head.appendChild('<link rel="stylesheet">');
  //   }
  return rule;
}

export default function NewHookApi(props) {
  const id = useId();

  const store = useStore();
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

  const [count, setCount] = useState(0);

  useInsertionEffect(() => {
    // debugger;

    console.log("useInsertionEffect"); //sy-log
  }, [count]);

  useLayoutEffect(() => {
    // debugger;

    console.log("useLayoutEffect"); //sy-log
  }, [count]);

  useEffect(() => {
    // debugger;

    console.log("useEffect"); //sy-log
  }, [count]);

  return (
    <div className={css()}>
      <h3 id={id}>NewHookApi</h3>

      <button onClick={() => store.dispatch({ type: "ADD" })}>
        state: {state}
      </button>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
}
