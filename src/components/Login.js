import React from "react";
import { connect } from "react-redux";
import { logout, setAuthedUser } from "../actions/authedUser";

class Login extends React.Component {
  state = {
    user: null,
  };
  handleChange = (e) => {
    const user = e.target.value;
    this.setState({ user });
  };
  handleLogin = (e) => {
    e.preventDefault();
    const user = this.state.user;
    this.props.dispatch(setAuthedUser(user));
  };

  handleLogout = (e) => {
    this.props.dispatch(logout());
    this.setState({ user: null });
  };
  render() {
    return this.props.authedUser === null ? (
      <form onSubmit={this.handleLogin}>
        <select onChange={this.handleChange}>
          <option value={null}>Select</option>
          {this.props.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button>LOGIN</button>
      </form>
    ) : (
      <div>
        <a href='#' onClick={this.handleLogout}>Logout</a>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser,
  };
}

export default connect(mapStateToProps)(Login);
