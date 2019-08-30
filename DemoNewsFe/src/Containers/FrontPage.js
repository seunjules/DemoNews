import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import NewsComp from "../Components/newsComponent"

class FrontPage extends Component {

  async componentDidMount() {
    this.props.onRequestHeadlines();
  }

  render() {
 

    return (
      <div>
       <NewsComp headlines = {this.props.headlines.topNews}/>
       <NewsComp headlines = {this.props.headlines.technology}/>
       <NewsComp headlines = {this.props.headlines.business}/>
       <NewsComp headlines = {this.props.headlines.health}/>
       <NewsComp headlines = {this.props.headlines.entertainment}/>
       <NewsComp headlines = {this.props.headlines.sports}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
