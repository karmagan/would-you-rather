import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
    home: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.getAttribute("name")]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleSaveQuestion({
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo,
        author: this.props.authedUser,
      })
    );
    this.setState({ home: "yes" });
  };
  render() {
    return (
      <div className="mx-auto my-3 " style={{ maxWidth: "800px" }}>
        <h1>New Poll</h1>
        <form className="border p-3 shadow" onSubmit={this.handleSubmit}>
          {this.state.home === "yes" && <Navigate to="/" />}
          <h3>Would You Rather</h3>
          <label htmlFor="optionOne" className="form-label">
            Option One
          </label>
          <input
            id="optionOne"
            className="form-control"
            type="text"
            name="optionOne"
            onChange={this.handleChange}
            value={this.state.optionOne}
          />
          <label htmlFor="optionTwo" className="form-label">
            Option Two
          </label>

          <input
            id="optionTwo"
            className="form-control"
            type="text"
            name="optionTwo"
            onChange={this.handleChange}
            value={this.state.optionTwo}
          />
          <button className=" btn btn-primary">Submit Poll</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
