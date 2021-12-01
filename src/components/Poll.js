import React from "react";
import { Link } from "react-router-dom";

class Poll extends React.Component {
  render() {
    const { optionOne, optionTwo, id, author } = this.props.poll;
    return (
      <Link to={`/question/${id}`} style={{ border: "solid", margin: "10px", padding: "10px" }}>
        <h3>{author} asks</h3>
        <h2>Would you rather:</h2>
        <p>
          {optionOne.text} or {optionTwo.text}
        </p>
      </Link>
    );
  }
}

export default Poll;
