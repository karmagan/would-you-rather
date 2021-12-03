import React from "react";
import { connect } from "react-redux";
import Poll from "./Poll";

function PollsList(props) {
  const { polls, users } = props;
  return (
    <div className="d-flex flex-wrap ">
      {polls.map((poll) => (
        <Poll key={poll.id} poll={poll} author={users[poll.author]} />
      ))}
    </div>
  );
}

function mapStateToProps({ questions, users }, { pollsList }) {
  return {
    polls: pollsList
      .map((poll) => questions[poll])
      .sort((a, b) => b.timestamp - a.timestamp),
    users,
  };
}

export default connect(mapStateToProps)(PollsList);
