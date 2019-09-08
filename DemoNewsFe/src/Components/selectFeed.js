import React from "react";
import NewsCard from "../Components/NewsCard.js";

const SelectFeed = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  const selectFeed = headlines.articles.slice(1, 5).map((x, i) => {
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
    <div>
      <div className="selectFeed">{selectFeed}</div>
    </div>
  );
};

export default SelectFeed;
