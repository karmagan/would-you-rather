import React from "react";
import { connect } from "react-redux";
import PollsList from "./PollsList";
class PollsHome extends React.Component {
  render() {
    return (
      <div>
        <h3>You answered</h3>
        <PollsList pollsList={this.props.answeredPolls} />
        <h3> You did not answer</h3>
        <PollsList pollsList={this.props.otherPolls} />
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const answeredPolls =
    authedUser !== null ? Object.keys(users[authedUser].answers) : [];
  const otherPolls =
    authedUser !== null
      ? Object.values(questions)
          .filter((poll) => !answeredPolls.includes(poll.id))
          .map((poll) => poll.id)
      : [];
  return {
    otherPolls,
    answeredPolls,
    authedUser,
  };
}

export default connect(mapStateToProps)(PollsHome);
