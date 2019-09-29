import React from "react";
import NewsCard from "../Components/NewsCard.js";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import { Link } from "react-router-dom";
import Nav from "../Components/nav";
import "../style/searchPage.css";

const SearchPage = props => {
  const { searchNewsResponse, onCloseSearch } = props;
  const searchSelectFeed = searchNewsResponse.articles
    ? searchNewsResponse.articles.map((x, i) => {
        return (
          <div className="searchFeedItem">
            <NewsCard
              src={x.urlToImage}
              title={x.title}
              content={x.content}
              url={x.url}
              publishedAt={x.publishedAt}
              source={x.source}
              description={x.description}
              onOpenArticle={() => props.onOpenArticle(x)}
            />
          </div>
        );
      })
    : null;

  return (
    <div className="lightPadding category">
      <Nav displayMode="alternate" />
      <div className="searchFeed">{searchSelectFeed}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
