import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import React from "react";
import PollsHome from "./PollsHome";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <p>Welcome {this.props.authedUser && this.props.authedUser.name}</p>
        <PollsHome />
      </div>
    );
  }
}

function mapStateToProps({authedUser,users}){
  return{
    authedUser:users[authedUser]
  }
}

export default connect(mapStateToProps)(App);
