import React from "react";
import { Link } from "react-router-dom";
import "../style/bannerCard.css";

const BannerCard = props => {
  let date = new Date(props.publishedAt);
  return (
    <div className = "banner">
    <Link className="" to="/NewsPage">
      <div className="bannerImgContainer" onClick={() =>{ 
        window.scrollTo(0, 0);
        props.onOpenArticle(props)}}>
        <img src={props.urlToImage} alt="Article Thumbnail" className="bannerImg" />
        </div>
        <div className="textContainer">
          <h2 className = "bold">{props.title}</h2>
          <p className = "bold">
            {date.toDateString()} | {props.source.name}
          </p>
       
      </div>
    </Link>
    </div>
  );
};

export default BannerCard;
