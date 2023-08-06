import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Namaste React1");

const heading2 = React.createElement("h2", {}, "Namaste React2");

const container = React.createElement("div", { className: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
