import React, { Component } from "react";

import "./styles/BadgeNew.css";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import header from "../images/badge-header.svg";
import Avatar from '../images/cat.svg';


class BadgeNew extends Component {
  state = { form: {} };

  /* manage a change in the page to set the new state */
  handleChange = e => {
    this.setState({
      form: {
        /* we get the previous values in the form*/
        ...this.state.form,
        /* and add a new one */
        [e.target.name]: e.target.value,
      }
    });
  };

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
                    <BadgeForm onChange={this.handleChange} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
