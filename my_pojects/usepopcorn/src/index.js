import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMoveRating] = useState(0);
  return (
    <div>
      <StarRating color="green" maxRating={10} onSetRating={setMoveRating} />
      <p> This movie has been rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
