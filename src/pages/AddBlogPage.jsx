import MainAdd from "../component/bodyCreate/MainAdd";
import Footer from "../component/footer";
import CreateHead from "../component/header/AddContentHead/Head";

function AddBlogPage() {
  return (
    <div className="setAddHead container-fluid  ">
      <CreateHead />
      <MainAdd />
      <Footer />
    </div>
  );
}

export default AddBlogPage;
