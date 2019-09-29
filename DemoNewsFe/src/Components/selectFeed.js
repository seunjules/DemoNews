import React from "react";
import NewsCard from "../Components/NewsCard.js";
import "../style/selectFeed.css";

const SelectFeed = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  const selectFeed = headlines.articles.slice(1, 4).map((x, i) => {
    return (
      <div className = "selectFeedItem">
      <NewsCard
        src={x.urlToImage}
        title={x.title}
        content={x.content}
        url={x.url}
        publishedAt = {x.publishedAt}
        source = {x.source}
        description = {x.description}
        onOpenArticle={() => {
          window.scrollTo(0, 0);
          onOpenArticle(x)}}
      />
      </div>
    );
  });

  return (
      <div className="selectFeed">{selectFeed}</div>
  );
};

export default SelectFeed;
