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
            <Route path="/" element={<PollsHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            {this.props.authedUser && (
              <Route path="/question/:id" element={<PollDetails />} />
            )}
            {this.props.authedUser && (
              <Route path="/newquestion" element={<NewQuestion />} />
            )}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
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
