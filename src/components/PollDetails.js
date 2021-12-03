import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import PollDetailsAnswered from "./PollDetailsAnswered";
import PollDetailsUnanswered from "./PollDetailsUnanswered";
import {Link} from 'react-router-dom'
function PollDetails(props) {
  const { id } = useParams();
  const { answers } = props.user;
  const questions = props.questions
  return (
    <div>
      {questions[id] ? (
        answers[id] ? (
          <PollDetailsAnswered qid={id} />
        ) : (
          <PollDetailsUnanswered qid={id} />
        )
      ) : (
        <h3 className='text-center text-danger'> 
          Question Not Found <br /> Please go to <Link to='/'>Home Page</Link> to see the questions.
        </h3>
      )}
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    user: users[authedUser],
    questions,
  };
}

export default connect(mapStateToProps)(PollDetails);
