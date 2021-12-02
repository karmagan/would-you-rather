import React from "react";
import { Link } from "react-router-dom";

class Poll extends React.Component {
  render() {
    const { optionOne, optionTwo, id, author } = this.props.poll;
    return (
      <Link
        className="card text-decoration-none link-dark m-3"
        to={`/question/${id}`}
        style={{width:'400px'}}
      >
        <div className="card-header">
          <h5 className="card-title">{author} asks</h5>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle">Would you rather:</h6>
          <p className="card-text">
            {optionOne.text} or {optionTwo.text}
          </p>
        </div>
      </Link>
    );
  }
}

export default Poll;
