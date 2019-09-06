import React from "react";

const BannerCard = props => {
   

    
        return (
    
          <div className="banner">
    
            <img src={props.src} alt="Article Thumbnail" className="bannerImg" />
            <div className = "textContainer"><h2>{props.title}</h2></div>
            
          </div>
        );
      }
    
    

export default BannerCard;
