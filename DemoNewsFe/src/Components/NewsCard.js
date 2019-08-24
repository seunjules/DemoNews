import React, { Component } from "react";

class NewsCard extends Component {
  render() {
    return (
      <div className="cardContainer">
        <img src={this.props.src} alt="Article Thumbnail" className="newsImg" />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default NewsCard;
