import React, { Component } from "react";
import { connect } from "react-redux";
import FrontPage from "./FrontPage";
import SearchPage from "./SearchPage";
import Nav from "../Components/nav";
import "../style/App.css";
import { mapStateToProps, mapDispatchToProps } from "../util";

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.displayFrontPage ? <FrontPage /> : null}
        {this.props.displaySearchPage ? <SearchPage /> : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
