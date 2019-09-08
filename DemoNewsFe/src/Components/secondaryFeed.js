import React from "react";
import NewsCard from "../Components/NewsCard.js";

const SecondaryFeed = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  const secondaryFeed = headlines.articles.slice(5, 7).map((x, i) => {
    return (
      <NewsCard
        src={x.urlToImage}
        title={x.title}
        content={x.content}
        url={x.url}
        onOpenArticle = {() => onOpenArticle(x)}
      />
    );
  });

  return (
    <div>
        <div className="secondaryFeed">{secondaryFeed}</div>
    </div>
  );
};

export default SecondaryFeed;