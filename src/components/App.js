import { getInitialData } from "../utils/api";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    getInitialData().then((a) => console.log(a));
    return <div className="App">App</div>;
  }
}
export default connect()(App);
