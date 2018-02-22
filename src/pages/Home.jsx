import React, { Component } from "react";
import { connect } from "react-refetch";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ExcerptList from "../components/ExcerptList/ExcerptList";
import PostsPlaceholder from "../components/ExcerptList/ExcerptsPlaceholder";

class Home extends Component {
  render() {
    const { postsFetch } = this.props;
    const MainBlock = () => {
      // render the different promise states
      if (postsFetch.pending) {
        return <PostsPlaceholder />;
      } else if (postsFetch.rejected) {
        return <div>Error!</div>;
      } else if (postsFetch.fulfilled) {
        const posts = postsFetch.value;

        return (
          <div>
            <ExcerptList posts={posts} />
          </div>
        );
      }
    };

    return (
      <div>
        <Header
          sitename="Artemean Blog"
          description="Just another WordPress site"
        />
        {MainBlock()}
        <Footer />
      </div>
    );
  }
}

export default connect(props => {
  return {
    postsFetch: "http://wp-api.artemean.com/wp-json/wp/v2/posts",
  };
})(Home);
