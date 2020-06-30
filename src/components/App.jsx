import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobsOffers from "./JobsOffers";
import JobsPost from "./JobsPost";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../css/materialize.min.css";
import "../css/styles.css";
import M from "materialize-css";

export default class App extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      M.AutoInit();
    });
  }

  render() {
    return (
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Route path="/" exact component={JobsOffers} />
          <Route path="/offerjob" exact component={JobsPost} />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}
