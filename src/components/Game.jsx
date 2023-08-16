import React from "react";
import Graph from "./Graph";
import { Expression, GraphingCalculator } from "desmos-react";

function Game(props) {
  const { title, description, graphs } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {graphs.map((graph, i) => {
        console.log(graph);
        return <Graph key={i} func={graph} />;
      })}
    </div>
  );
}

export default Game;
