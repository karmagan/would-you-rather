import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import React from "react";
import PollsHome from "./PollsHome";
import Login from "./Login";
import { Route, Routes } from "react-router";
import Nav from "./Nav";
import PollDetails from "./PollDetails";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <Routes>
            {this.props.authedUser && (
              <Route path="/" element={<PollsHome />} />
            )}
            <Route path="/login" element={<Login />} />
            {this.props.authedUser && (
              <Route path="/leaderboard" element={<LeaderBoard />} />
            )}
            {this.props.authedUser && (
              <Route path="/questions/:id" element={<PollDetails />} />
            )}
            {this.props.authedUser && (
              <Route path="/add" element={<NewQuestion />} />
            )}
            <Route
              path="*"
              element={
                <h1 className="text-center">
                  {" "}
                  Please login to see the content.
                </h1>
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
