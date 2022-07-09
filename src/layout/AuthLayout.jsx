import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header/Header";

function AuthLayout() {
  return (
    <>
      <Header />
      <div className="container-fluid  tw-pt-14  bg-secondary ">
        <div className="container px-3">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthLayout;
