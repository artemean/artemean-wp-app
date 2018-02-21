import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ExcerptList from "../components/ExcerptList/ExcerptList";
import PostsPlaceholder from "../components/ExcerptList/ExcerptsPlaceholder";

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
    console.log(this.props);
    const MainBlock = this.state.posts.length ? (
      <ExcerptList posts={this.state.posts} />
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
