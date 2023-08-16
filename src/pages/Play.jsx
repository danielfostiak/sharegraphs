import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Game from "../components/Game";

function Play() {
  const { postTitle } = useParams();
  const [data, setData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const document = await getDoc(doc(db, "posts", postTitle));
      if (!document.exists()) return;
      setData(document.data());
    };
    getData();
  }, []);

  return (
    <div>
      {data ? (
        <Game
          title={data.title}
          description={data.description}
          graphs={data.graphs}
        />
      ) : (
        <h1>Post not found</h1>
      )}
    </div>
  );
}

export default Play;
