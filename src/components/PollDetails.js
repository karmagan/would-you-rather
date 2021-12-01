import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import PollDetailsAnswered from "./PollDetailsAnswered";
import PollDetailsUnanswered from "./PollDetailsUnanswered";

function PollDetails(props) {
  const { id } = useParams();
  const { answers } = props;
  return (
    <div>
      {answers[id] ? (
        <PollDetailsAnswered qid={id} />
      ) : (
        <PollDetailsUnanswered qid={id} />
      )}
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    answers : users[authedUser].answers
  };
}

export default connect(mapStateToProps)(PollDetails);
