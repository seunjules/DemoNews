import React, { Component } from "react";
import NewsCard from "../Components/NewsCard.js";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.onRequestHeadlines();
    // this.props.onRequestHeadlines(TECHNOLOGY);
    // this.props.onRequestHeadlines(BUSINESS);
    // this.props.onRequestHeadlines(SPORTS);
    // this.props.onRequestHeadlines(ENTERTAINMENT);
    // this.props.onRequestHeadlines(HEALTH);
  }

  render() {
    console.log(this.props.headlines)
    const topHeadlines = this.props.headlines.topNews
      ? this.props.headlines.topNews.articles.map((x, i) => {
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

    const techHeadlines = this.props.headlines.technology
      ? this.props.headlines.technology.articles.map((x, i) => {
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

    const businessHeadlines = this.props.headlines.business
      ? this.props.headlines.business.articles.map((x, i) => {
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

    const healthHeadlines = this.props.headlines.health
      ? this.props.headlines.health.articles.map((x, i) => {
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

    const entertainmentHeadlines = this.props.headlines.entertainment
      ? this.props.headlines.entertainment.articles.map((x, i) => {
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

    const sportsHeadlines = this.props.headlines.sports
      ? this.props.headlines.sports.articles.map((x, i) => {
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

    const topSelectFeed = this.props.headlines.articles
      ? this.props.headlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;

    const techSelectFeed = this.props.technologyHeadlines.articles
      ? this.props.technologyHeadlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;

    const businessSelectFeed = this.props.businessHeadlines.articles
      ? this.props.businessHeadlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;

    const healthSelectFeed = this.props.healthHeadlines.articles
      ? this.props.healthHeadlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;

    const entertainmentSelectFeed = this.props.entertaimentHeadlines.articles
      ? this.props.entertaimentHeadlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;

    const sportsSelectFeed = this.props.sportsHeadlines.articles
      ? this.props.sportsHeadlines.articles.slice(0, 4).map((x, i) => {
          return <NewsCard src={x.urlToImage} title={x.title} />;
        })
      : null;

    return (
      <div>
        <div className="category top" id="trending">
          <div className="topSection">
            <div className="popUpSection">pop up</div>
            <div className="headlineFeed">{topHeadlines}</div>
          </div>

          <div className="selectFeed">{topSelectFeed}</div>
        </div>
        <div className="category top" id="technology">
          <div className="topSection">
            <h1>Science and Technology</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{techHeadlines}</div>
          </div>

          <div className="selectFeed">{techSelectFeed}</div>
        </div>
        <div className="category top" id="business">
          <div className="topSection">
            <h1>Business</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{businessHeadlines}</div>
          </div>

          <div className="selectFeed">{businessSelectFeed}</div>
        </div>
        <div className="category top" id="sports">
          <div className="topSection">
            <h1>Sports</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{sportsHeadlines}</div>
          </div>

          <div className="selectFeed">{sportsSelectFeed}</div>
        </div>
        <div className="category top" id="health">
          <div className="topSection">
            <h1>Health</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{healthHeadlines}</div>
          </div>

          <div className="selectFeed">{healthSelectFeed}</div>
        </div>
        <div className="category top" id="entertainment">
          <div className="topSection">
            <h1>Entertainment</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{entertainmentHeadlines}</div>
          </div>

          <div className="selectFeed">{entertainmentSelectFeed}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
