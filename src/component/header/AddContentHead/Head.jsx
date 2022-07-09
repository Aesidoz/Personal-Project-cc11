import Logo from "../logo";

function CreateHead() {
  return (
    <nav className=" setAddHead navbar navbar-expand-sm  bg-primary shadow-sm  d-flex justify-content-between container-fluid px-5 ">
      <Logo />
      <div className="fs-3 ">Menu</div>
    </nav>
  );
}

export default CreateHead;
