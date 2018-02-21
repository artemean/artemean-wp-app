import React, { Component } from "react";
import Post from "../components/Post/Post";

export default class PostPage extends Component {
  render() {
    const postIdFromUrl = this.props.match.params.postId;
    return (
      <div>
        <Post postId={postIdFromUrl} />
      </div>
    );
  }
}
