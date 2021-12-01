import React from "react";
import { connect } from "react-redux";
import { logout, setAuthedUser } from "../actions/authedUser";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  state = {
    user: "",
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
    this.setState({ user: "" });
  };
  render() {
    return !this.props.authedUser ? (
      <div className='login'>
      <form onSubmit={this.handleLogin}>
        <select value={this.state.user} onChange={this.handleChange}>
          <option value={null}>Select</option>
          {this.props.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button>LOGIN</button>
      </form>
      </div>
    ) : (
      <Navigate to="/" />
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser: users[authedUser],
  };
}

export default connect(mapStateToProps)(Login);
