import React from "react";
import { connect } from "react-redux";

class PollDetailsAnswered extends React.Component {
  render() {
    const { question, user, authorname } = this.props;
    const answer = user.answers[question.id];
    return (
      <div className="card mx-auto" style={{maxWidth:'800px'}}>
        <div className="card-header">
          <h6>{authorname} asks:</h6>
        </div>
        <div className="card-body">
          <h6>Would you rather:</h6>
          <div
            className={answer === "optionOne" ? "border border-success p-3" : "border p-3"}
          >
            <h4>{question.optionOne.text}</h4>
            <br />
            Number of people voted for this option:{" "}
            {question.optionOne.votes.length}
            <br />
            Percentage:{" "}
            {(100 * question.optionOne.votes.length) /
              (question.optionOne.votes.length +
                question.optionTwo.votes.length)}
          </div>
          <div
            className={answer === "optionTwo" ? "border border-success p-3" : "border p-3"}
          >
            <h4>{question.optionTwo.text}</h4>
            <br />
            Number of people voted for this option:{" "}
            {question.optionTwo.votes.length}
            <br />
            Percentage:{" "}
            {(100 * question.optionTwo.votes.length) /
              (question.optionOne.votes.length +
                question.optionTwo.votes.length)}
          </div>
          {"You answered: " + question[answer].text}
        </div>
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
