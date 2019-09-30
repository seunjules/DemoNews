import React from "react";
import search from "../images/search.png";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../util";
import { Link } from 'react-router-dom'
import "../style/nav.css";

const Nav = props => {

  if (props.displayMode === "alternate") {
    return (
      <div className="navContainer">
      <div className=" flex fullHeight">
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">
          <Link to ="/" className = "link dim white dib mr3" onClick = {() => window.scrollTo(0, 0)}> Front Page </Link>
          </nav>
        </header>
      </div>
    </div>
    )
  }
  return (
    <div className="navContainer">
      <div className=" flex fullHeight">
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">
            <a
              className="link dim white dib mr3"
              title="Trending"
              name="Trending"
              href="#trending"
            >
              Trending
            </a>
            <a
              className="link dim white dib mr3"
              title="Technology"
              name="Technology"
              href="#technology"
            >
              Technology
            </a>
            <a
              className="link dim white dib mr3"
              title="Business"
              name="Business"
              href="#business"
            >
              Business
            </a>
            <a
              className="link dim white dib mr3"
              title="Health"
              name="Health"
              href="#health"
            >
              Health
            </a>
            <a
              className="link dim white dib mr3"
              title="Entertainment"
              name="Entertainment"
              href="#entertainment"
            >
              Entertainment
            </a>
            <a
              className="link dim white dib mr3"
              title="Sports"
              name="Sports"
              href="#sports"
            >
              Sports
            </a>
          </nav>
          <input
            type="text"
            className="black"
            placeholder="Search"
            name="input"
            value={props.input}
            onChange={props.onSearchChange}
          ></input>
          <button className="noPadding">
           <Link to ="/searchPage"> <img
              src={search}
              alt="search button"
              className="search"
              onClick={() => props.onRequestSearch(props.searchField)}
            /></Link>
          </button>
        </header>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
