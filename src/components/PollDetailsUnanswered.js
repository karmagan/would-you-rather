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
    const { question, authorname } = this.props;
    return (
      <div style={{ border: "solid", margin: "10px", padding: "10px" }}>
        <h3>{authorname} asks:</h3>
        <h2>Would you rather:</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            id="optionOne"
            type="radio"
            value="optionOne"
            checked={this.state.answer === 'optionOne'}
            onChange={this.handleChange}
          />
          <label htmlFor="optionOne">{question.optionOne.text}</label>
          <br />
          <input
            id="optionTwo"
            type="radio"
            value="optionTwo"
            checked={this.state.answer === 'optionTwo'}
            onChange={this.handleChange}
          />
          <label htmlFor="optionTwo">{question.optionTwo.text}</label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users,questions, authedUser }, { qid }) {
  return {
    authedUser,
    question: questions[qid],
    authorname: users[questions[qid].author].name,
  };
}

export default connect(mapStateToProps)(PollDetailsUnanswered);
