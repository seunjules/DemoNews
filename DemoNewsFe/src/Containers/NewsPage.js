import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import NewsComp from "../Components/newsComponent";

const NewsPage = props => {
   
  const { activeNewsArticle } = props;
 
  if (!activeNewsArticle) return null;

  return (

    <div className="">
      <img src={activeNewsArticle.urlToImage} alt="Article Thumbnail" className="newsImg" />
      <p>{activeNewsArticle.title}</p>
      <p>{activeNewsArticle.url}</p>
      <p>{activeNewsArticle.publishedAt}</p>
      <p>{activeNewsArticle.content}</p>
      <p>{activeNewsArticle.description}</p>
    </div>
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);