import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/authedUser";

function Nav(props) {
  let navigate = useNavigate();
  const handleLogout = () => {
    props.dispatch(logout());
    navigate("/login");
  };
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      {props.user ? (
        <div>
          Welcome {props.user.name}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          Please Login <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Nav);
