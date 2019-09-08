import React from "react";
import { Link } from "react-router-dom";
import "../style/newsCard.css";

const NewsCard = props => {
  
    return (
      <Link className="button" to="/NewsPage"><div className="cardContainer" onClick = {props.onOpenArticle}>
        <img src={props.src} alt="Article Thumbnail" className="secondaryNewsImage" />
        <p>{props.title}</p>
      </div></Link> 
    );
  }


export default NewsCard;
