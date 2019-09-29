import React from "react";
import BannerCard from "../Components/BannerCard.js";
import SelectFeed from "./selectFeed.js";
import SecondaryFeed from "./secondaryFeed.js";
import HeadLineList from "./headLineList.js";
import "../style/newsComp.css";

const NewsComp = props => {
  const { headlines, onOpenArticle, title } = props;

  if (!headlines) return null;

  return (
    <div>
      <div className="category">
        <h1>{title}</h1>
        <div className="topSection">
          <BannerCard
            urlToImage={headlines.articles[0].urlToImage}
            title={headlines.articles[0].title}
            content={headlines.articles[0].content}
            url={headlines.articles[0].url}
            onOpenArticle={onOpenArticle}
            publishedAt = {headlines.articles[0].publishedAt}
            source = {headlines.articles[0].source}
          />
          <SecondaryFeed
            headlines={headlines}
            onOpenArticle={onOpenArticle}
          />
          <div className = "headlineFeedContainer1">
          <div className="headlineFeed">
            <HeadLineList
              headlines={headlines}
              onOpenArticle={onOpenArticle}
            />
          </div>
          </div>
        </div>
        <SelectFeed headlines={headlines} onOpenArticle={onOpenArticle} />
      </div>
    </div>
  );
};

export default NewsComp;
