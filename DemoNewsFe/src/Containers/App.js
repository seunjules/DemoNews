import React, { Component } from "react";
import { connect } from "react-redux";
import FrontPage from "./FrontPage";
import SearchPage from "./SearchPage";
import NewsPage from "./NewsPage";
import Nav from "../Components/nav";
import "../style/App.css";
import { mapStateToProps, mapDispatchToProps } from "../util";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentDidMount = () => {
    this.props.onRequestHeadlines();
  };

  render() {

    return (
      <Router>
      <div className="App">
        <Route exact path='/' component={FrontPage} />
        <Route path='/SearchPage' component={SearchPage} />
        <Route path='/NewsPage' component={NewsPage} />
      </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
