import React, { useState } from "react";

function PostForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [graphs, setGraphs] = useState([""]);
  const { post } = props;

  const checkGraph = (graph) => {
    return (graph.includes("y") || graph.includes("x")) && graph.includes("=");
  };

  const addGraph = (e) => {
    e.preventDefault();
    if (graphs.slice(-1) == "") return;
    setGraphs([...graphs, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title == "") {
      alert("Fill out title before submitting");
      return;
    } else if (description == "") {
      alert("Fill out description before submitting");
      return;
    } else if (!graphs.every(checkGraph)) {
      alert("Fill out all graphs before submitting");

      return;
    }
    await post({
      title,
      description,
      graphs,
    });
  };

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        placeholder="My Awesome Post"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        placeholder="This post is awesome"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {graphs.map((graph, i) => (
        <>
          <label
            key={`label ${i + 1}`}
            htmlFor={`Graph ${i + 1}`}
            name={`Graph ${i + 1}`}
          >{`Graph ${i + 1}`}</label>
          <input
            key={`input ${i + 1}`}
            type="text"
            name={`Graph ${i + 1}`}
            onChange={(e) => {
              const dummyGraphs = graphs;
              dummyGraphs[i] = e.target.value;
              setGraphs(dummyGraphs);
            }}
          />
        </>
      ))}
      <button onClick={addGraph}>Add graph</button>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default PostForm;
