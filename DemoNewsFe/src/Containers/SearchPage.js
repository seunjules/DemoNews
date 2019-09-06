import React from "react";
import NewsCard from "../Components/NewsCard.js";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";

const SearchPage = props => {
  const { searchNewsResponse, onCloseSearch } = props;
  const searchSelectFeed = searchNewsResponse.articles
    ? searchNewsResponse.articles.map((x, i) => {
        return <NewsCard src={x.urlToImage} title={x.title} />;
      })
    : null;

  return (
    <div className="lightPadding category">
      <button onClick={onCloseSearch} className="closeButton">
        X
      </button>
      <div className="searchFeed">{searchSelectFeed}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
