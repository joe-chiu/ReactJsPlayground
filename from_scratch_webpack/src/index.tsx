import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>React with TypeScript, from scratch</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById("root")
);