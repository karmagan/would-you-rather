import React from "react";
import { connect } from "react-redux";
import PollsList from "./PollsList";

class PollsHome extends React.Component {
  state = {
    unanswered: true,
  };
  
  changeView=(e)=>{
    this.setState({unanswered: Boolean(e.target.value)})
  }
  render() {
    return (
      <div className="polls-home">
        <button 
        value='' 
        onClick={this.changeView}
        disabled={!this.state.unanswered}>Answered Polls</button>
        <button 
        value='true' 
        onClick={this.changeView}
        disabled={this.state.unanswered}>Unanswered Polls</button>
        {console.log(this.state.unanswered)}
        {this.state.unanswered === true ? (
          <div>
            <h2> You did not answer</h2>
            <PollsList pollsList={this.props.otherPolls} />
          </div>
        ) : (
          <div>
            <h2> You answered</h2>
            <PollsList pollsList={this.props.answeredPolls} />
          </div>
        )}
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
