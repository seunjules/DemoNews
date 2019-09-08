import React from "react";
import NewsCard from "../Components/NewsCard.js";
import "../style/selectFeed.css";

const SelectFeed = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  const selectFeed = headlines.articles.slice(1, 4).map((x, i) => {
    return (
      <NewsCard
        src={x.urlToImage}
        title={x.title}
        content={x.content}
        url={x.url}
        onOpenArticle={() => onOpenArticle(x)}
      />
    );
  });

  return (
      <div className="selectFeed">{selectFeed}</div>
  );
};

export default SelectFeed;
