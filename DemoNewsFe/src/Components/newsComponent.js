import React from "react";
import NewsCard from "../Components/NewsCard.js";
import BannerCard from "../Components/BannerCard.js";

const NewsComp = props => {

    const { headlines } = props;
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
      return <NewsCard src={x.urlToImage} title={x.title} />;
    });

    const secondaryFeed = headlines.articles.slice(5, 7).map((x, i) => {
      return <NewsCard src={x.urlToImage} title={x.title} />;
    });

    return (
      <div>
      
        <div className="category">
        <h1>{props.title}</h1>
          <div className="topSection">
          <BannerCard src={headlines.articles[0].urlToImage} title={headlines.articles[0].title} />
          <div className="secondaryFeed">{secondaryFeed}</div>
            <div className="headlineFeed">
            
            {headlinesList}
            </div> 
          </div>

          <div className="selectFeed">{selectFeed}</div>
        </div>
      </div>
    );
  }


export default NewsComp;
