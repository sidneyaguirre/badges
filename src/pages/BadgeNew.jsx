import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Avatar from '../images/cat.svg';


class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                        firstName = "Sidney"
                        lastName = "Aguirre"
                        jobTitle = "Software Engineer"
                        twitter = "sidney_pao"
                        avatar = {Avatar}
                    />
                </div>

                <div className="col-6">
                    <BadgeForm />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
