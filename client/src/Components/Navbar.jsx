import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../context/HouseProvider";

function Navbar() {
  const { logout, userState } = useContext(HouseContext);

  return (
    <nav className="navbar">
      <ul className="navbar--links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        {/* <li>
          <Link to="/houses">HOUSES</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link onClick={logout} to="/">
            LOGOUT
          </Link>
        </li> */}
        {userState.token && (
          <>
            <li>
              <Link to="/houses">HOUSES</Link>
            </li>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
            <li>
              <Link onClick={logout} to="/">
                LOGOUT
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
