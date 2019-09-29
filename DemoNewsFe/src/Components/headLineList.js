import React from "react";
import { Link } from "react-router-dom";
import "../style/headLineList.css";

const HeadLineList = props => {
  const { headlines, onOpenArticle } = props;

  if (!headlines) return null;

  const headlinesList = headlines.articles.map(x => {
    let date = new Date(x.publishedAt);
    return (
      <div>
        <Link
          className=""
          to="/NewsPage"
          href="#newsArticleTop"
          onClick={() => {
            window.scrollTo(0, 0);
            onOpenArticle(x);
          }}
        >
          <div className="headlineLink">
            <h3>{x.title}</h3>
            <p>
              {date.toDateString()} | {x.source.name}
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="headLineList">{headlinesList}</div>;
};

export default HeadLineList;
