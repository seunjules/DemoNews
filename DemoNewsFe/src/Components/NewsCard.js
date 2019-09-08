import React from "react";
import { Link } from "react-router-dom";

const NewsCard = props => {
  
    return (
      <Link className="button" to="/NewsPage"><div className="cardContainer" onClick = {props.onOpenArticle}>
        <img src={props.src} alt="Article Thumbnail" className="newsImg" />
        <p>{props.title}</p>
      </div></Link> 
    );
  }


export default NewsCard;
