import React from "react";
import Excerpt from "../Excerpt/Excerpt";

function ExcerptList({ posts }) {
  const renderPosts = posts.map(el => (
    <Excerpt
      key={el.id}
      title={el.title.rendered}
      body={el.excerpt.rendered}
      excerptId={el.id}
    />
  ));
  return <div>{renderPosts}</div>;
}

export default ExcerptList;
