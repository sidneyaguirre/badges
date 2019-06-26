import React, { Component } from 'react';

class BadgeForm extends Component{
    state = {};

    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value});
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = e => {
        /* prevent the button to submit info */
        console.log("button clicked");        
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(this.state);
        
    };

    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="firstName" value={this.setState.firstname} />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="lastName" value={this.setState.lastname} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} type="email" className="form-control" name="email" value={this.setState.email} />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="jobTitle" value={this.setState.jobTitle} />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="twitter" value={this.setState.twitter} />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
};

export default BadgeForm;