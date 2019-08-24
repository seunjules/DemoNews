import React, {Component} from 'react';


class BannerCard extends Component {
  
 

    render() {

        return ( 
            <div className = "bannerContainer">
              
                
                <h2 className = "imgCaption">{this.props.title}</h2>
                <img src = {this.props.src} alt = "Article Thumbnail" className = 'bannerImg'/>
                
            </div>
        )
    }
}

export default BannerCard;