import React from "react";
import { Link } from "react-router-dom";

const HeadLineList = props => {
  const { headlines, onOpenArticle } = props;
  console.log(props, "props from headlinelist")

  if (!headlines) return null;

  const headlinesList = headlines.articles.map(x => {
    let date = new Date(x.publishedAt);
    return (
        <Link className="button" to="/NewsPage" onClick = {() => props.onOpenArticle(x)}> <div className="headlineLink">
        <h3>{x.title}</h3>
        <p>
          {date.toDateString()} | {x.source.name}
        </p>
      </div>
      </Link>
    );
  });

  console.log("props from headlinelist", headlinesList) 


  return (
    <div>
        <div className="headLineList">{headlinesList}</div>
    </div>
  );
};

export default HeadLineList;