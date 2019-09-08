import React from "react";
import NewsCard from "../Components/NewsCard.js";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import { Link } from "react-router-dom";

const SearchPage = props => {
  const { searchNewsResponse, onCloseSearch } = props;
  const searchSelectFeed = searchNewsResponse.articles
    ? searchNewsResponse.articles.map((x, i) => {
        return <NewsCard  src={x.urlToImage}
        title={x.title}
        content={x.content}
        url={x.url}
        onOpenArticle={() => props.onOpenArticle(x)} />;
      })
    : null;

  return (
    <div className="lightPadding category">
      <Link className="button" to="/">
        Close Search
      </Link>
      <div className="searchFeed">{searchSelectFeed}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
