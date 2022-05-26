import { React, createRoot } from "./whichReact";
import "./index.css";
import SetStatePage from "./pages/SetStatePage";
import DiffPage from "./pages/DiffPage";
import jsx from "./pages/ExamplePage";
import SuspensePage from "./pages/SuspensePage";
// import NewHookApi from "./pages/NewHookApi";
import App from "./App";

// ReactDOM.render(<SetStatePage />, document.getElementById("root"));

// ReactDOM.render(<DiffPage />, document.getElementById("root"));

createRoot(document.getElementById("root")).render(<App />);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <UseDeferredValuePage />
// );

console.log("React", React.version); //sy-log
