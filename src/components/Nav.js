import React from "react";
import { connect } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/authedUser";

function Nav(props) {
  let navigate = useNavigate();
  const handleLogout = () => {
    props.dispatch(logout());
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
      <div className="container">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/add"
          >
            New Poll
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/leaderboard"
          >
            Leaderboard
          </NavLink>
        </div>
        {props.user ? (
          <div>
            <span className="navbar-text mx-2">Welcome {props.user.name}</span>
            <img
              src={props.user.avatarURL}
              className="mx-3"
              alt={`Avatar of ${props.user.name}`}
              style={{ maxWidth: "30px" }}
            />
            <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            Please Login{" "}
            <Link className="btn btn-sm btn-outline-success" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Nav);
