import React from "react";

const BannerCard = props => {
  return (
    <div className="bannerContainer">
      <h2 className="imgCaption">{props.title}</h2>
      <img src={props.src} alt="Article Thumbnail" className="bannerImg" />
    </div>
  );
};

export default BannerCard;
