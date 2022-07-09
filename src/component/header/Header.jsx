import { useContext } from "react";

import { AuthContext } from "../../contexts/authcontext";
import LoginFunc from "./LoginFunc";
import LoginProfile from "./loginprofile";
import Logo from "./logo";

function Header() {
  const { user } = useContext(AuthContext);
  return (
    // NO User HEADBARR
    <nav className="navbar navbar-expand-sm  bg-primary shadow-sm py-0 container-fluid ">
      <div className="container">
        <div>
          <Logo />
        </div>
        <div>
          {user ? (
            <>
              <LoginFunc />
            </>
          ) : (
            <>
              <LoginProfile />
            </>
          )}
        </div>
      </div>
    </nav>

    // User Headbar
    // <nav className="navbar navbar-expand-sm  bg-primary shadow-sm py-0 container-fluid ">
    //   <div className="container">
    //     <div>
    //       <Logo />
    //     </div>
    //     <div>
    //       <LoginFunc />
    //     </div>
    //   </div>
    // </nav>

    // Profile Headbar
    // <nav className="navbar navbar-expand-sm  bg-primary shadow-sm py-0 container-fluid border border">
    //   <div className="container-fluid d-flex justify-content-center border border ">
    //     <div className="d-flex gap-3">
    //       <Link to="/">
    //         <h1 style={{ fontSize: "80px" }}>BudgetTravle</h1>
    //       </Link>
    //       <div className="d-flex justify-content-end">
    //         <h1 className="d-flex flex-column justify-content-center">menu</h1>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;
