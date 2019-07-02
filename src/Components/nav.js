import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className=" flex end">
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">
            <a
              className="link dim white dib mr3"
              title="Trending"
              name="Trending"
              href = "#trending"
            >
              Trending
            </a>
            <a
              className="link dim white dib mr3"
              title="Technology"
              name="Technology"
              href = "#technology"
            >
              Technology
            </a>
            <a
              className="link dim white dib mr3"
              title="Business"
              name="Business"
              href = "#business"
            >
              Business
            </a>
            <a
              className="link dim white dib mr3"
              title="Sports"
              name="Sports"
              href = "#sports"
            >
              Sports
            </a>
            <a
              className="link dim white dib mr3"
              title="Health"
              name="Health"
              href = "#health"
            >
              Health
            </a>
            <a
              className="link dim white dib mr3"
              title="Entertainment"
              name="Entertainment"
              href = "#entertainment"
            >
              Entertainment
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
