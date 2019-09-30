import React from "react";
import { Link } from "react-router-dom";
import "../style/newsCard.css";

const NewsCard = props => {
  let date = new Date(props.publishedAt);
  return (
    <Link className="" to="/NewsPage">
      <div className="cardContainer" onClick={props.onOpenArticle}>
        <div className="imageContainer">
          <img
            src={props.src}
            alt="Article Thumbnail"
            className="secondaryNewsImage"
          />
        </div>
        <p className = "bold">{props.title}</p>
       <div className = "cardText"><p className = "noPadding">{props.description}</p></div>
       <div className = "cardFooter"><p className = "bold">
          {date.toDateString()} | {props.source.name}
        </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
