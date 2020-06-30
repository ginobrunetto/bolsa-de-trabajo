import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div class="navbar-fixed">
        <nav class="light-blue lighten-1" role="navigation">
          <div class="nav-wrapper container">
            <Link id="logo-container" to="./" class="brand-logo">
              Bolsa de trabajo
            </Link>
            <ul class="right hide-on-med-and-down">
              <li>
                {/* Dropdown Trigger */}
                <Link
                  class="waves-light btn-flat dropdown-trigger btn"
                  to="#"
                  data-target="dropdown_menu"
                >
                  MENU
                </Link>
                {/* Dropdown Structure */}
                <ul id="dropdown_menu" class="dropdown-content">
                  <li>
                    <Link to="/offerjob" class="pushpin-empleador">
                      Eres empleador?
                    </Link>
                  </li>
                  <li class="divider" tabindex="-1"></li>
                  <li>
                    <Link to="#!">Quienes somos</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul id="slide-out" class="sidenav">
              <li>
                <div class="user-view">
                  <div class="background">
                    <img src="./src/background_menu.jpg" />
                  </div>
                  <Link to="#name">
                    <span class="white-text name">Menu de opciones</span>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/offerjob">
                  <i class="material-icons">business_center </i>Eres empleador?
                </Link>
              </li>
              <li>
                <div class="divider"></div>
              </li>
              <li>
                <Link class="subheader">A cerca de nosotros</Link>
              </li>
              <li>
                <Link class="waves-effect" to="#!">
                  Quienes somos?
                </Link>
              </li>
            </ul>
            <Link to="#" data-target="slide-out" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
