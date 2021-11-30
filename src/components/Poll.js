import React from "react";

class Poll extends React.Component {
  render() {
    const { optionOne, optionTwo, author } = this.props.poll;
    return (
      <div style={{ border: "solid", margin: "10px", padding: "10px" }}>
        <h3>{author} asks</h3>
        <h2>Would you rather:</h2>
        <p>
          {optionOne.text} or {optionTwo.text}
        </p>
      </div>
    );
  }
}

export default Poll;
