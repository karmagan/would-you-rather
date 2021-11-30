import React from "react";
import { connect } from "react-redux";
import Poll from "./Poll";

class PollsList extends React.Component {
  render() {
    const { polls } = this.props;
    return (
      <div>
        <ul>
          {polls.map((poll) => (
            <li key={poll.id}>
              <Poll poll={poll} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }, { pollsList }) {
  return {
    polls: pollsList
      .map((poll) => questions[poll])
      .sort((a, b) => b.timestamp - a.timestamp),
  };
}

export default connect(mapStateToProps)(PollsList);
