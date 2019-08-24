import React, { Component } from "react";
import NewsCard from "../Components/NewsCard.js";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchSelectFeed = this.props.searchNewsResponse.articles
      ? this.props.searchNewsResponse.articles.map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;

    return (
      <div className="lightPadding category">
        <button onClick={this.props.onCloseSearch} className="closeButton">
          X
        </button>
        <div className="searchFeed">{searchSelectFeed}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
