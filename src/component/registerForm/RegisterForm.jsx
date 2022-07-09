import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";
import { ErrorContext } from "../../contexts/ErrorContext";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { register } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      await register({
        firstName,
        lastName,
        userName,
        email,
        password,
        confirmPassword,
      });
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
      setTrigger((prev) => !prev);
      console.log(err);
    }
  };

  return (
    <form
      className="bg-secondary 
    vh-100 d-flex justify-content-center align-items-center"
      onSubmit={handleSubmitSignUp}
    >
      <div className=" RegisterForm bg-success justify-content-center ">
        <div className="bg-primary text-center py-3  ">
          <Link to="/">
            <h1 className="text-dark">BudgetTravle</h1>
          </Link>
        </div>
        <div className="px-5">
          <h2 className=" text-centerd text-center mt-3">Register</h2>

          {/* FirstName Input */}
          <label className="form-label">
            <h4>First Name</h4>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* LastName Input */}
          <label className="form-label">
            <h4>Last Name</h4>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Username */}
          <label className="form-label">
            <h4>Username</h4>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          {/* email */}
          <label className="form-label">
            <h4>Email</h4>
          </label>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <label className="form-label">
            <h4>Password</h4>
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm Password */}
          <label className="form-label mt-3">
            <h4>Confirm Password</h4>
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="signinBtn  d-flex  justify-content-center">
            <button
              type="submit"
              className="btn btn-secondary btn-block mb-4 mt-5 px-5  "
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <Link to="/login">
              <h4>back to Login</h4>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
