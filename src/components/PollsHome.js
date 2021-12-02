import React from "react";
import { connect } from "react-redux";
import PollsList from "./PollsList";

class PollsHome extends React.Component {
  state = {
    unanswered: true,
  };

  changeView = (e) => {
    this.setState({ unanswered: Boolean(e.target.value) });
  };
  render() {
    return this.props.authedUser ? (
      <div className="my-3">
        <div className="nav nav-tabs">
          <button
            value=""
            onClick={this.changeView}
            className={!this.state.unanswered ? "nav-link active" : "nav-link"}
          >
            Answered Polls
          </button>
          <button
            value="true"
            onClick={this.changeView}
            className={this.state.unanswered ? "nav-link active" : "nav-link"}
          >
            Unanswered Polls
          </button>
        </div>
        {this.state.unanswered === true ? (
          <div>
            <PollsList pollsList={this.props.unansweredPolls} />
          </div>
        ) : (
          <div>
            <PollsList pollsList={this.props.answeredPolls} />
          </div>
        )}
      </div>
    ) : (
      <h1 className='text-center'>Please login to see the polls!</h1>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const answeredPolls =
    authedUser !== null ? Object.keys(users[authedUser].answers) : [];
  const unansweredPolls =
    authedUser !== null
      ? Object.values(questions)
          .filter((poll) => !answeredPolls.includes(poll.id))
          .map((poll) => poll.id)
      : [];
  return {
    authedUser,
    unansweredPolls,
    answeredPolls,
  };
}

export default connect(mapStateToProps)(PollsHome);
