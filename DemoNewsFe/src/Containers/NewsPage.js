import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import { LOREM_IPSUM } from "../constants";
import HeadLineList from "../Components/headLineList.js";
import SelectFeed from "../Components/selectFeed.js";
import Nav from "../Components/nav";
import "../style/newsArticle.css"

const NewsPage = props => {
  const { activeNewsArticle, headlines, onOpenArticle } = props;
  
  if (!activeNewsArticle) return null;

  return (
    <div  className="newsArticlePageContainer">
    <Nav displayMode = "alternate"/>
    <div className = "newsArticleTop" id ="newsArticleTop">
    <div className="newsArticleContainer">
      <div className = "newsImgContainer"><img src={activeNewsArticle.urlToImage} alt="Article Thumbnail" className="newsImg" /></div>
      <h1>{activeNewsArticle.title}</h1>
      <p className = "articleText">{activeNewsArticle.url}</p>
      <p>{activeNewsArticle.content}
      <br /><br />
      {LOREM_IPSUM}
      <br /><br />
      {LOREM_IPSUM}
      <br /><br />
      {LOREM_IPSUM}
      </p>
      <p>{activeNewsArticle.publishedAt}</p>
    </div>
    <div className = "headlineFeedContainer">
    <div className="headlineFeed">
    <HeadLineList
              headlines={headlines.topNews}
              onOpenArticle={onOpenArticle}
            />
            </div>
            </div>
            </div>
            <SelectFeed headlines={headlines.topNews} onOpenArticle={onOpenArticle} />
            </div>
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);