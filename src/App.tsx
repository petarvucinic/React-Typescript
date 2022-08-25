import React from "react";
import "./App.css";
import SimpleComponent from "./components/SimpleComponent";

// interface AppProps {
//   name: string;
// }

function App() {
  // const { name } = props;
  // let a: string;
  // let b: boolean;
  // let c: Record<string, string>;
  // let d: string[];
  // let f: object[];

  return (
    <div className="App">
      <SimpleComponent name="pero" age={10}>
        <p></p>
      </SimpleComponent>
    </div>
  );
}

export default App;
