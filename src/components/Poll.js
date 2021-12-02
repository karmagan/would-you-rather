import React from "react";
import { Link } from "react-router-dom";

class Poll extends React.Component {
  render() {
    const { optionOne, optionTwo, id } = this.props.poll;
    const { name, avatarURL } = this.props.author;
    return (
      <Link
        className="card text-decoration-none link-dark m-3"
        to={`/questions/${id}`}
        style={{ width: "400px" }}
      >
        <div className="card-header">
          <h5 className="card-title">{name} asks</h5>
        </div>
        <div className='d-flex'>
          <img
            src={avatarURL}
            className="card-img-top"
            alt={`Avatar of ${name}`}
            style={{ maxWidth: "100px" }}
          />
          <div className="card-body">
            <h6 className="card-subtitle">Would you rather:</h6>
            <p className="card-text">
              {optionOne.text} or {optionTwo.text}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Poll;
