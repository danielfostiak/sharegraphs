import React from "react";
import Graph from "../components/Graph";
import { useState } from "react";

function Home() {
  const [graph, setGraph] = useState("");
  return (
    <div>
      <h1>Share graphs with your friends</h1>
    </div>
  );
}

export default Home;
