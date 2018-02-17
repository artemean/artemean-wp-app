import React, { Component } from "react";
import PostList from "../PostList/PostList";

export default class Main extends Component {
  render() {
    return (
      <div>
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}
