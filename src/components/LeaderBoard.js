import React from "react";
import { connect } from "react-redux";
import Leader from "./Leader";

class LeaderBoard extends React.Component {
  render() {
    return (
      <div>
        {Object.values(this.props.users)
          .sort(
            (a, b) =>
              Object.keys(b.questions).length +
              Object.keys(b.answers).length -
              Object.keys(a.questions).length -
              Object.keys(a.answers).length
          )
          .map((user) => (
            <Leader key={user.id} name={user.name} avatar={user.avatarURL} questions={Object.keys(user.questions).length}
                answers={Object.keys(user.answers).length} />
          ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
