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
    const from = this.props.from;
    return !this.props.authedUser ? (
      <div className="login">
        {from && <h3 className='text-center'>You need to login before accessing this page!</h3>}
        <form
          className="mx-auto my-3 p-3"
          onSubmit={this.handleLogin}
          style={{ maxWidth: "500px" }}
        >
          <select
            className="form-control"
            value={this.state.user}
            onChange={this.handleChange}
          >
            <option value={null}>Select user </option>
            {this.props.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button className="form-control btn btn-primary my-1">LOGIN</button>
        </form>
      </div>
    ) : (
      <Navigate to={from ? from : '/'} />
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
