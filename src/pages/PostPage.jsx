import React, { Component } from "react";
import Post from "../components/Post/Post";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class PostPage extends Component {
  render() {
    const postIdFromUrl = this.props.match.params.postId;
    return (
      <div>
        <Header
          sitename="Artemean Blog"
          description="Just another WordPress site"
        />
        <Post postId={postIdFromUrl} />
        <Footer />
      </div>
    );
  }
}
