import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">Home</Link>
          
        </div>
        {this.props.authedUser ? (
          <div>
            Welcome {this.props.authedUser.name} <button>Logout</button>
          </div>
        ) : (
          <div>Please Login <Link to="/login">Login</Link></div>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser: users[authedUser],
  };
}

export default connect(mapStateToProps)(Nav);
