import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends React.Component {
  state = {
    user: "",
  };
  handleChange = (e) => {
    const user = e.target.value;

    this.setState(() => ({
      user,
    }))
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { dispatch } = this.props;
    // todo: Add Tweet to Store
    dispatch(setAuthedUser(user));
    this.setState(() => ({
      user: "",
    }));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Login);
