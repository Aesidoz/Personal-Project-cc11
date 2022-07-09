import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";

function LoginFunc() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="d-flex gap-3 px-3 mt-2  ">
      <div>
        <Link to="/create">
          <i class="fa-solid fa-notes-medical fa-2x"></i>
        </Link>
      </div>

      <div>
        <Link to="/profile">
          <i class="fa-solid fa-circle-user fa-2x"></i>
        </Link>
        <div class="btn-group">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <Link to="/" class="dropdown-item">
                New Blog
              </Link>
            </li>
            <li>
              <Link to="/" class="dropdown-item">
                User setting
              </Link>
            </li>
            <li>
              <Link to="/" class="dropdown-item" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginFunc;
