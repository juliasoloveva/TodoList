import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Heading from "./components/Heading";
import TodoLost from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <Heading text="Todos" />
      <TodoLost />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
