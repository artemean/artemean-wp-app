import React, { Component } from "react";
import createMarkup from "../../utils/createMarkup";

export default class Post extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    this.fetchPost(this.props.postId);
  }

  fetchPost(postId) {
    fetch(`http://wp-api.artemean.com/wp-json/wp/v2/posts/${postId}`)
      .then(res => res.json())
      .then(post => {
        this.setState({
          post,
        });
      });
  }

  render() {
    const body = this.state.post.hasOwnProperty("content")
      ? this.state.post.content.rendered
      : null;
    const title = this.state.post.hasOwnProperty("title")
      ? this.state.post.title.rendered
      : null;

    return (
      <div>
        <h2 className="post-title">{title}</h2>
        <div
          className="post-body"
          dangerouslySetInnerHTML={createMarkup(body)}
        />
      </div>
    );
  }
}
