import React, { Component } from "react";
import NewsCard from "./NewsCard.js";


class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        topNews: [], 
        techNews: [],
        businessNews: [],
        healthNews: [],
        entertainmentNews: [],
        sportsNews: []
    };
  }
  async componentDidMount() {
    let topResponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&languahe=en&apiKey=fe70ebfecd2948d797f65db1b7d70bf3");
    let techResponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&languahe=en&category=technology&apiKey=fe70ebfecd2948d797f65db1b7d70bf3");
    let businessResponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&languahe=en&category=business&apiKey=fe70ebfecd2948d797f65db1b7d70bf3");
    let healthResponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&languahe=en&category=health&apiKey=fe70ebfecd2948d797f65db1b7d70bf3");
    let entertainmentResponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&languahe=en&category=entertainment&apiKey=fe70ebfecd2948d797f65db1b7d70bf3");
    let sportsResponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&languahe=en&category=sports&apiKey=fe70ebfecd2948d797f65db1b7d70bf3");
    topResponse = await topResponse.json();
    techResponse = await techResponse.json();
    businessResponse = await businessResponse.json();
    healthResponse = await healthResponse.json();
    entertainmentResponse = await entertainmentResponse.json();
    sportsResponse = await sportsResponse.json();
    console.log(topResponse.articles);
    console.log(techResponse)
    this.setState({ topNews: topResponse, 
                    techNews: techResponse,
                    businessNews: businessResponse,
                    healthNews: healthResponse,
                    entertainmentNews: entertainmentResponse,
                    sportsNews: sportsResponse
    });
  }

  render() {
    const topHeadlines = this.state.topNews.articles
      ? this.state.topNews.articles.map((x, i) => {
          let date = new Date(x.publishedAt);
          return (
            <div key={i} className = "headlineLink">
              <h3>{x.title}</h3>
              <p>
                {date.toDateString()} | {x.source.name}
              </p>
            </div>
          );
        })
      : null;

    const techHeadlines = this.state.techNews.articles
      ? this.state.techNews.articles.map((x, i) => {
          let date = new Date(x.publishedAt);
          return (
            <div key={i} className = "headlineLink">
              <h3>{x.title}</h3>
              <p>
                {date.toDateString()} | {x.source.name}
              </p>
            </div>
          );
        })
      : null;
     
      const businessHeadlines = this.state.businessNews.articles
      ? this.state.businessNews.articles.map((x, i) => {
          let date = new Date(x.publishedAt);
          return (
            <div key={i} className = "headlineLink">
              <h3>{x.title}</h3>
              <p>
                {date.toDateString()} | {x.source.name}
              </p>
            </div>
          );
        })
      : null;
      
      const healthHeadlines = this.state.healthNews.articles
      ? this.state.healthNews.articles.map((x, i) => {
          let date = new Date(x.publishedAt);
          return (
            <div key={i} className = "headlineLink">
              <h3>{x.title}</h3>
              <p>
                {date.toDateString()} | {x.source.name}
              </p>
            </div>
          );
        })
      : null;

      const entertainmentHeadlines = this.state.entertainmentNews.articles
      ? this.state.entertainmentNews.articles.map((x, i) => {
          let date = new Date(x.publishedAt);
          return (
            <div key={i} className = "headlineLink">
              <h3>{x.title}</h3>
              <p>
                {date.toDateString()} | {x.source.name}
              </p>
            </div>
          );
        })
      : null;

      const sportsHeadlines = this.state.sportsNews.articles
      ? this.state.sportsNews.articles.map((x, i) => {
          let date = new Date(x.publishedAt);
          return (
            <div key={i} className = "headlineLink">
              <h3>{x.title}</h3>
              <p>
                {date.toDateString()} | {x.source.name}
              </p>
            </div>
          );
        })
      : null;
      

    const topSelectFeed = this.state.topNews.articles
      ? this.state.topNews.articles.slice(0,4).map((x, i) => {
            return (
                <NewsCard src = {x.urlToImage} title = {x.title}/>
            )
      })  
      : null;

      const techSelectFeed = this.state.techNews.articles
      ? this.state.techNews.articles.slice(0,4).map((x, i) => {
            return (
                <NewsCard src = {x.urlToImage} title = {x.title}/>
            )
      })  
      : null;
      
      const businessSelectFeed = this.state.businessNews.articles
      ? this.state.businessNews.articles.slice(0,4).map((x, i) => {
            return (
                <NewsCard src = {x.urlToImage} title = {x.title}/>
            )
      })  
      : null;
      
      const healthSelectFeed = this.state.healthNews.articles
      ? this.state.healthNews.articles.slice(0,4).map((x, i) => {
            return (
                <NewsCard src = {x.urlToImage} title = {x.title}/>
            )
      })  
      : null;
      
      const entertainmentSelectFeed = this.state.entertainmentNews.articles
      ? this.state.entertainmentNews.articles.slice(0,4).map((x, i) => {
            return (
                <NewsCard src = {x.urlToImage} title = {x.title}/>
            )
      })  
      : null;  

      const sportsSelectFeed = this.state.sportsNews.articles
      ? this.state.sportsNews.articles.slice(0,4).map((x, i) => {
            return (
                <NewsCard src = {x.urlToImage} title = {x.title}/>
            )
      })  
      : null;  



    return (
      <div>
        <div className="category top" id = "trending">
          <div className="topSection">
            <h1>Trending News</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{topHeadlines}</div>
          </div>

          <div className = "selectFeed">{topSelectFeed}</div>
        </div>
        <div className="category top" id = "technology">
          <div className="topSection">
            <h1>Science and Technology</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{techHeadlines}</div>
          </div>

          <div className = "selectFeed">{techSelectFeed}</div>
        </div>
        <div className="category top" id = "business">
          <div className="topSection">
            <h1>Business</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{businessHeadlines}</div>
          </div>

          <div className = "selectFeed">{businessSelectFeed}</div>
        </div>
        <div className="category top" id = "sports">
          <div className="topSection">
            <h1>Sports</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{sportsHeadlines}</div>
          </div>

          <div className = "selectFeed">{sportsSelectFeed}</div>
        </div>
        <div className="category top" id = "health">
          <div className="topSection">
            <h1>Health</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{healthHeadlines}</div>
          </div>

          <div className = "selectFeed">{healthSelectFeed}</div>
        </div>
        <div className="category top" id = "entertainment">
          <div className="topSection">
            <h1>Entertainment</h1>
            <div>Pop up Section</div>
            <div className="headlineFeed">{entertainmentHeadlines}</div>
          </div>

          <div className = "selectFeed">{entertainmentSelectFeed}</div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
