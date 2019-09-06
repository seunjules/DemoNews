import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import NewsComp from "../Components/newsComponent";

const FrontPage = props => {
  const { headlines } = props;
  return (
    <div className = "frontPageContainer">
      <div id ="trending"><NewsComp headlines={headlines.topNews} title = "Top Stories"/></div>
      <div id ="technology"> <NewsComp headlines={headlines.technology} title = "Technology"/></div>
      <div id ="business"> <NewsComp headlines={headlines.business} title = "Business"/></div>
      <div id ="health"><NewsComp headlines={headlines.health} title = "Health" /></div>
      <div id ="entertainment"> <NewsComp headlines={headlines.entertainment} title = "Entertainment"/></div>
      <div id ="sports">
      <NewsComp headlines={headlines.sports} title = "Sports" /></div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
