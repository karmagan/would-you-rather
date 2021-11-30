import React from "react";
import { connect } from "react-redux";

class PollsList extends React.Component {
  render() {
    console.log(this.props.polls)
    return (
      <div>
        <ul>
          {this.props.polls.map((poll) => (
             <li key={poll.id}>{poll.author} asks - {poll.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions },{pollsList}) {
  return {
    polls: pollsList.map((poll)=>(questions[poll])).sort((a, b) => b.timestamp - a.timestamp),
  };
}

export default connect(mapStateToProps)(PollsList);
