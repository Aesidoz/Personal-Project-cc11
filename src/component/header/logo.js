import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="text-dark text-decoration-none">
      <h1>BudgetTravel</h1>
    </Link>
  );
}

export default Logo;
