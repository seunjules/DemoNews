import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import NewsComp from "../Components/newsComponent";

class FrontPage extends Component {
  

  render() {

    const { headlines } = this.props
    return (
      <div>
        <NewsComp headlines = { headlines.topNews } />
        <NewsComp headlines = { headlines.technology } />
        <NewsComp headlines = { headlines.business } />
        <NewsComp headlines = { headlines.health } />
        <NewsComp headlines = { headlines.entertainment } />
        <NewsComp headlines = { headlines.sports } />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
