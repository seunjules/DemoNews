import React from "react";
import { Link } from "react-router-dom";
import "../style/bannerCard.css";

const BannerCard = props => {
   

    
        return (
    
          <Link className="button" to="/NewsPage"><div className="banner"  onClick = {() => props.onOpenArticle(props)}>
    
            <img src={props.src} alt="Article Thumbnail" className="bannerImg" />
            <div className = "textContainer"><h2>{props.title}</h2></div>
            
          </div></Link>
        );
      }
    
    

export default BannerCard;
