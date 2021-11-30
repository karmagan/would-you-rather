import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import React from "react";
import PollsHome from "./PollsHome";
import Login from "./Login";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <Login />
        {this.props.authedUser && (
          <div>
            Welcome {this.props.authedUser.name}
            <PollsHome />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: users[authedUser],
  };
}

export default connect(mapStateToProps)(App);
