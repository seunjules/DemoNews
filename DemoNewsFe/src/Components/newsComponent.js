import React from "react";
import NewsCard from "../Components/NewsCard.js";
import BannerCard from "../Components/BannerCard.js";
import SelectFeed from "./selectFeed.js";
import SecondaryFeed from "./secondaryFeed.js";
import HeadLineList from "./headLineList.js";

const NewsComp = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  const headlinesList = headlines.articles.map((x, i) => {
    let date = new Date(x.publishedAt);
    return (
      <div key={i} className="headlineLink">
        <h3>{x.title}</h3>
        <p>
          {date.toDateString()} | {x.source.name}
        </p>
      </div>
    );
  });

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

  const secondaryFeed = headlines.articles.slice(5, 7).map((x, i) => {
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
      <div className="category">
        <h1>{props.title}</h1>
        <div className="topSection">
          <BannerCard
            src={headlines.articles[0].urlToImage}
            title={headlines.articles[0].title}
            content={headlines.articles[0].content}
            url={headlines.articles[0].url}
            onOpenArticle={() => onOpenArticle(headlines.articles[0])}
          />
          <div className="secondaryFeed">
            <SecondaryFeed
              headlines={props.headlines}
              onOpenArticle={props.onOpenArticle}
            />
          </div>
          <div className="headlineFeed"><HeadLineList
              headlines={props.headlines}
              onOpenArticle={props.onOpenArticle}
            /></div>
        </div>

        <div className="selectFeed">
          <SelectFeed
            headlines={props.headlines}
            onOpenArticle={props.onOpenArticle}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsComp;
