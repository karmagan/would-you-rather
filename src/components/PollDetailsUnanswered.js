import React from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
class PollDetailsUnanswered extends React.Component {
  state = {
    answer: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleSaveAnswer({
        authedUser: this.props.authedUser,
        qid: this.props.question.id,
        answer: this.state.answer,
      })
    );
  };
  handleChange = (e) => {
    this.setState({ answer: e.target.value });
  };
  render() {
    const { question, authorname, authoravatar } = this.props;
    return (
      <div className="card mx-auto my-3 " style={{ maxWidth: "800px" }}>
        <div className="card-header">
          <h6 className="card-title">{authorname} asks</h6>
        </div>
        <div className="d-flex">
          <img
            src={authoravatar}
            className="card-img-top"
            alt={`Avatar of ${authorname}`}
            style={{ maxWidth: "300px" }}
          />
          <form className="card-body" onSubmit={this.handleSubmit}>
            <h3 className="card-subtitle">Would you rather:</h3>
            <div className="form-check my-3">
              <input
                className="form-check-input"
                id="optionOne"
                type="radio"
                value="optionOne"
                checked={this.state.answer === "optionOne"}
                onChange={this.handleChange}
              />
              <label
                className={
                  this.state.answer === "optionOne"
                    ? "form-check-label text-success"
                    : "form-check-label"
                }
                htmlFor="optionOne"
              >
                {question.optionOne.text}
              </label>
            </div>
            <div className="form-check my-3">
              <input
                className="form-check-input"
                id="optionTwo"
                type="radio"
                value="optionTwo"
                checked={this.state.answer === "optionTwo"}
                onChange={this.handleChange}
              />
              <label
                className={
                  this.state.answer === "optionTwo"
                    ? "form-check-label text-success"
                    : "form-check-label"
                }
                htmlFor="optionTwo"
              >
                {question.optionTwo.text}
              </label>
            </div>
            <button className="form-control btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { qid }) {
  return {
    authedUser,
    question: questions[qid],
    authorname: users[questions[qid].author].name,
    authoravatar: users[questions[qid].author].avatarURL,
  };
}

export default connect(mapStateToProps)(PollDetailsUnanswered);
