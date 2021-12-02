import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import React from "react";
import PollsHome from "./PollsHome";
import Login from "./Login";
import { Route, Routes } from "react-router";
import Nav from "./Nav";
import PollDetails from "./PollDetails";
import NewQuestion from "./NewQuestion";

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
            <Route path="/question/:id" element={<PollDetails />} />
            <Route path="/newquestion" element={<NewQuestion />} />
          </Routes>
        </div>
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
