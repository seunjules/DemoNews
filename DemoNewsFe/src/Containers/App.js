import React from "react";
import { connect } from "react-redux";
import FrontPage from "./FrontPage";
import SearchPage from "./SearchPage";
import Nav from "../Components/nav";
import "../style/App.css";
import { mapStateToProps, mapDispatchToProps } from "../util";

const App = props => {
  props.onRequestHeadlines();

  return (
    <div className="App">
      <Nav />
      {props.displayFrontPage ? <FrontPage /> : null}
      {props.displaySearchPage ? <SearchPage /> : null}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
