import React, { Component } from "react";
import NewsCard from "../Components/NewsCard.js";

class NewsComp extends Component {
  render() {
    const { headlines } = this.props
    if(!headlines) return null; 
    
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
        })
      

    const selectFeed = headlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      

    return (
      <div>
        <div className="category top">
          <div className="topSection">
            <div className="headlineFeed">{headlinesList}</div>
          </div>

          <div className="selectFeed">{selectFeed}</div>
        </div>
      </div>
    );
  }
}

export default NewsComp;
