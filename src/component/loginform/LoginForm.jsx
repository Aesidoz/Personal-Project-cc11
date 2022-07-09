import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";
import { ErrorContext } from "../../contexts/ErrorContext";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();

      await Login(userName, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <form
        className="bg-secondary 
      vh-100 d-flex justify-content-center align-items-center "
        onSubmit={handleSubmitLogin}
      >
        <div className=" loginForm bg-success justify-content-center">
          <div className="bg-primary text-center py-3  ">
            <Link to="/">
              <h1>BudgetTravle</h1>
            </Link>
          </div>
          <div className="px-5">
            <h2 className=" text-centerd text-center mt-3">Sign In</h2>
            {/* Emaill Input */}
            <label className="form-label">
              <h4>Username</h4>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {/* Password Input */}
            <label className="form-label mt-3">
              <h4>Password</h4>
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="signinBtn  d-flex  justify-content-center">
              <button
                type="submit"
                className="btn btn-secondary btn-block mb-4 mt-5 px-5  "
              >
                Sign in
              </button>
            </div>
            <div className="text-center">
              <Link to="/register">
                <h4>Register</h4>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
