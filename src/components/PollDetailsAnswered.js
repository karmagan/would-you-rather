import React from "react";
import { connect } from "react-redux";

class PollDetailsAnswered extends React.Component {
  render() {
    const { question, user, authorname } = this.props;
    const answer = user.answers[question.id];
    return (
      <div style={{ border: "solid", margin: "10px", padding: "10px" }}>
        <h3>{authorname} asks:</h3>
        <h2>Would you rather:</h2>
        <div className={answer === "optionOne" ? "selected-option" : "option"}>
          Option One:
          {question.optionOne.text}
          <br />
          Number of people voted for this option:{" "}
          {question.optionOne.votes.length}
          <br />
          Percentage:{" "}
          {(100 * question.optionOne.votes.length) /
            (question.optionOne.votes.length + question.optionTwo.votes.length)}
        </div>
        <div className={answer === "optionTwo" ? "selected-option" : "option"}>
          Option Two:
          {question.optionTwo.text}
          <br />
          Number of people voted for this option:{" "}
          {question.optionTwo.votes.length}
          <br />
          Percentage:{" "}
          {(100 * question.optionTwo.votes.length) /
            (question.optionOne.votes.length + question.optionTwo.votes.length)}
        </div>
        {"You answered: " + question[answer].text}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { qid }) {
  return {
    question: questions[qid],
    authorname: users[questions[qid].author].name,
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(PollDetailsAnswered);
