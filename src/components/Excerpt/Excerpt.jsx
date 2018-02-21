import React from "react";
import { Link } from "react-router-dom";

function Excerpt({ excerptId, body, title }) {
  function createMarkup(string) {
    return { __html: string };
  }
  return (
    <div>
      <h2 className="post-title">
        <Link to={`/post/${excerptId}`}>{title}</Link>
      </h2>
      <div className="post-body" dangerouslySetInnerHTML={createMarkup(body)} />
    </div>
  );
}

export default Excerpt;
