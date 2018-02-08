import React from "react";
import Post from "../Post/Post";

function PostList({ posts }) {
  const renderPosts = posts.map(el => (
    <Post key={el.id} title={el.title.rendered} body={el.content.rendered} />
  ));
  return <div>{renderPosts}</div>;
}

export default PostList;
