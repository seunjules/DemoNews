import React from "react";

const NewsCard = props => {

    return (
      <div className="cardContainer">
        <img src={props.src} alt="Article Thumbnail" className="newsImg" />
        <p>{props.title}</p>
      </div>
    );
  }


export default NewsCard;
