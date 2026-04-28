import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../Data";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = Data.find((item) => item.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
    <button onClick={()=>navigate(-1)}>Back</button>
    <div>
      <h1>{post.title}</h1>
      <img src={post.img_url} alt="" />
      <p>{post.description}</p>
    </div>
    </>
  );
};

export default Details;