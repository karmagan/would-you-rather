import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

function PollDetails(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { id } = useParams();
  const question = props.questions[id];
  const authorname = props.users[question.author].name;
  const { answers } = props.authedUser;
  return (
    <div>
      {answers[id] ? (
        <div style={{ border: "solid", margin: "10px", padding: "10px" }}>
          <h3>{authorname} asks:</h3>
          <h2>Would you rather:</h2>
          <p>
            {question.optionOne.text} or {question.optionTwo.text}
          </p>
          {"You answered: " + question[answers[id]].text}
        </div>
      ) : (
        <div style={{ border: "solid", margin: "10px", padding: "10px" }}>
          <h3>{authorname} asks:</h3>
          <h2>Would you rather:</h2>

          <form onSubmit={handleSubmit}>
            <input
              id="optionOne"
              type="radio"
              name="answer"
              value="optionOne"
            />
            <label htmlFor="optionOne">{question.optionOne.text}</label>
            <br />
            <input
              id="optionTwo"
              type="radio"
              name="answer"
              value="optionTwo"
            />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    authedUser: users[authedUser],
    questions,
    users,
  };
}

export default connect(mapStateToProps)(PollDetails);
