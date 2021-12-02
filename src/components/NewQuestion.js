import React from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
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
  };
  render() {
    return (
      <form
        className=" mx-auto my-3 border p-3 shadow"
        onSubmit={this.handleSubmit}
        style={{ maxWidth: "800px" }}
      >
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
        <button className=" btn btn-primary">Submit Question</button>
      </form>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
