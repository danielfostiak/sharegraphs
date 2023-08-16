import React, { useState } from "react";
import PostForm from "../components/PostForm";
import { db } from "../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

  const postData = async (data) => {
    const document = await getDoc(doc(db, "posts", data.title));
    if (document.exists() || data.title == "post") {
      alert("Post with same name already exists");
      return;
    }
    await setDoc(doc(db, "posts", data.title), data);
    navigate(`/${data.title}`);
    alert("Posted!");
  };

  return (
    <div>
      <h1>Post</h1>
      <PostForm post={postData} />
    </div>
  );
}

export default Post;
