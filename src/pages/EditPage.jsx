import MainEdit from "../component/EditItems/MainEdit";
import Footer from "../component/footer";
import CreateHead from "../component/header/AddContentHead/Head";

function EditPage() {
  return (
    <div className="setAddHead container-fluid  ">
      <CreateHead />
      <MainEdit />
      <Footer />
    </div>
  );
}

export default EditPage;
