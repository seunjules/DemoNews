import React, { Component } from "react";
import { connect } from "react-redux";
import FrontPage from "./FrontPage";
import SearchPage from "./SearchPage";
import Nav from "../Components/nav";
import "../style/App.css";
import { mapStateToProps, mapDispatchToProps } from "../util";

class App extends Component {
  componentDidMount = () => {
    this.props.onRequestHeadlines();
  };

  render() {

    const {displayFrontPage, displaySearchPage } = this.props
    return (
      <div className="App">
        <Nav />
        {displayFrontPage ? <FrontPage /> : null}
        {displaySearchPage ? <SearchPage /> : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
