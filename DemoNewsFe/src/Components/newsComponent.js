import React, { Component } from "react";
import NewsCard from "../Components/NewsCard.js";


class NewsComp extends Component {


  render() {
    console.log(this.props.headlines, "where am I")
    const headlines = this.props.headlines
      ? this.props.headlines.articles.map((x, i) => {
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
      : null;


    const selectFeed = this.props.headlines
      ? this.props.headlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;


    return (
      <div>
        <div className="category top" id="entertainment">
          <div className="topSection">
            <h1>Entertainment</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{headlines}</div>
          </div>

          <div className="selectFeed">{selectFeed}</div>
        </div>
      </div>
    );
  }
}

export default NewsComp;
