import { Link } from "react-router-dom";

function LoginProfile() {
  return (
    <div>
      <Link to="/login" className="text-dark text-decoration-none">
        <h2>Login/Register</h2>
      </Link>
    </div>
  );
}

export default LoginProfile;
