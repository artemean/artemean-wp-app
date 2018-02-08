import React from "react";

function Post({ body, title }) {
  function createMarkup(string) {
    return { __html: string };
  }
  return (
    <div>
      <h2 className="post-title">{title}</h2>
      <div className="post-body" dangerouslySetInnerHTML={createMarkup(body)} />
    </div>
  );
}

export default Post;
