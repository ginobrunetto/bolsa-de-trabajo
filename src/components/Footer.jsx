import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer orange">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Company Bio</h5>
              <p class="grey-text text-lighten-4">
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Settings</h5>
              <ul>
                <li>
                  <Link class="white-text" to="#!">
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link class="white-text" to="#!">
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link class="white-text" to="#!">
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link class="white-text" to="#!">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Connect</h5>
              <ul>
                <li>
                  <Link class="white-text" to="#!">
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link class="white-text" to="#!">
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link class="white-text" to="#!">
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link class="white-text" to="#!">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">Made by Brand New Shit Co.</div>
        </div>
      </footer>
    );
  }
}
