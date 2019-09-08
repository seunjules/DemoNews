import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import NewsComp from "../Components/newsComponent";
import Nav from "../Components/nav";

const FrontPage = props => {
  const { headlines } = props;
  return (
    <div className="frontPageContainer">
      <Nav />
      <div id="trending">
        <NewsComp
          headlines={headlines.topNews}
          title="Top Stories"
          onOpenArticle={props.onOpenArticle}
        />
      </div>
      <div id="technology">
        {" "}
        <NewsComp
          headlines={headlines.technology}
          title="Technology"
          onOpenArticle={props.onOpenArticle}
        />
      </div>
      <div id="business">
        {" "}
        <NewsComp
          headlines={headlines.business}
          title="Business"
          onOpenArticle={props.onOpenArticle}
        />
      </div>
      <div id="health">
        <NewsComp
          headlines={headlines.health}
          title="Health"
          onOpenArticle={props.onOpenArticle}
        />
      </div>
      <div id="entertainment">
        {" "}
        <NewsComp
          headlines={headlines.entertainment}
          title="Entertainment"
          onOpenArticle={props.onOpenArticle}
        />
      </div>
      <div id="sports">
        <NewsComp
          headlines={headlines.sports}
          title="Sports"
          onOpenArticle={props.onOpenArticle}
        />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
