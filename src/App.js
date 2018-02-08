import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import PostsPlaceholder from "./components/PostList/PostsPlaceholder";
import "./App.css";

class App extends Component {
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
      <Main posts={this.state.posts} />
    ) : (
      <PostsPlaceholder />
    );
    return (
      <div className="App">
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

export default App;
