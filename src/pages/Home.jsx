import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PostList from "../components/PostList/PostList";
import PostsPlaceholder from "../components/PostList/PostsPlaceholder";

export default class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("http://wp-api.artemean.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts,
        });
      });
  }

  render() {
    const MainBlock = this.state.posts.length ? (
      <PostList posts={this.state.posts} />
    ) : (
      <PostsPlaceholder />
    );

    return (
      <div>
        <Header
          sitename="Artemean Blog"
          description="Just another WordPress site"
        />
        {MainBlock}
        <Footer />
      </div>
    );
  }
}
