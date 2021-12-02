import React from "react";

class Leader extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-between mx-auto border my-3"
        style={{ maxWidth: "800px" }}
      >
        <img
            src={this.props.avatar}
            className="card-img-top"
            alt={`Avatar of ${this.props.name}`}
            style={{ maxWidth: "200px" }}
          />
        <div className="card-body m-3 w-75">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-subtitle">{this.props.questions} questions</h6>
          <h6 className="card-subtitle">{this.props.answers} answers</h6>
        </div>
        <div className="card-body m-3 w-25">
          Score:<h1>{this.props.questions + this.props.answers}</h1>
        </div>
      </div>
    );
  }
}

export default Leader;
