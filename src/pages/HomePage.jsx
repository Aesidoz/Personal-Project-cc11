import ShowBody from "../component/allbody/showbody/ShowBody";
import TopHeading from "../component/headimg/TopHeading";

function HomePage() {
  return (
    <div className="container ">
      <TopHeading />
      <div className="bg-success  pt-5">
        <ShowBody />
      </div>
    </div>
  );
}

export default HomePage;
