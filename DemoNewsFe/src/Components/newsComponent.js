import React from "react";
import NewsCard from "../Components/NewsCard.js";
import BannerCard from "../Components/BannerCard.js";
import SelectFeed from "./selectFeed.js";
import SecondaryFeed from "./secondaryFeed.js";
import HeadLineList from "./headLineList.js";
import "../style/newsComp.css";

const NewsComp = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  return (
    <div>
      <div className="category">
        <h1>{props.title}</h1>
        <div className="topSection">
          <BannerCard
            src={headlines.articles[0].urlToImage}
            title={headlines.articles[0].title}
            content={headlines.articles[0].content}
            url={headlines.articles[0].url}
            onOpenArticle={onOpenArticle}
          />
          <div className="secondaryFeed">
            <SecondaryFeed
              headlines={props.headlines}
              onOpenArticle={onOpenArticle}
            />
          </div>
          <div className="headlineFeed">
            <HeadLineList
              headlines={props.headlines}
              onOpenArticle={onOpenArticle}
            />
          </div>
        </div>

        <div className="selectFeed">
          <SelectFeed
            headlines={props.headlines}
            onOpenArticle={onOpenArticle}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsComp;
