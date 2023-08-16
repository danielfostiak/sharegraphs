import React from "react";
import Graph from "../components/Graph";
import { useState } from "react";

function Home() {
  const [graph, setGraph] = useState("");
  return (
    <div>
      <h1>Graph</h1>
      <input type="text" onChange={(e) => setGraph(e.target.value)} />
      <Graph func={graph} />
    </div>
  );
}

export default Home;
