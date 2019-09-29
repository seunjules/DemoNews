import React from "react";
import NewsCard from "../Components/NewsCard.js";
import "../style/secondaryFeed.css";

const SecondaryFeed = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  const secondaryFeed = headlines.articles.slice(5, 7).map((x, i) => {
    return (
      <div className = "secondaryFeedItemContainer">
      <NewsCard
        src={x.urlToImage}
        title={x.title}
        content={x.content}
        url={x.url}
        publishedAt = {x.publishedAt}
        source = {x.source}
        onOpenArticle = {() => {
          window.scrollTo(0, 0);
          onOpenArticle(x)}}
      />
      </div>
    );
  });

  return (
        <div className="secondaryFeed">{secondaryFeed}</div>
  );
};

export default SecondaryFeed;