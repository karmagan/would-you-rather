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
            <Route path="/" element={ this.props.authedUser ? <PollsHome /> : <Login /> } />

            <Route path="/login" element={<Login />} />

            <Route path="/leaderboard" element={this.props.authedUser ? <LeaderBoard />: <Login from="/leaderboard" />} />

            <Route path="/questions/:id" element={this.props.authedUser ? <PollDetails />: <Login from="/questions/:id" />} />

            <Route path="/add" element={this.props.authedUser ? <NewQuestion />: <Login from="/add" />} />

            <Route path="*" element={ <h1 className="text-center text-danger"> Page does not exist! </h1> } />
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
