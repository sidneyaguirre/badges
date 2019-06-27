import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./styles/Badges.css";

import BadgesListItem from "../components/BadgesListItem";
import Header from "../components/Navbar";
import confLogo from "../images/badge-header.svg";
import data from "../data/data.json";

class Badges extends Component {
  state = {
    data
  };
  render() {
    return (
      <div>
        <Header />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>

            <div className="Badges__list">
              <div className="Badges__container">
                <BadgesListItem badges={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
