import { Link } from "react-router-dom";

function LocatePage() {
  return (
    // <ul class=" Pagi pagination -around fs-4 mt-5 px-5">
    <div className="container border border-success mt-4">
      <ul className=" container-fluid pagination   justify-content-center gap-4 mt-1  ">
        <li className="text-dark">
          <Link to="#">1</Link>
        </li>
        <li>
          <Link to="#">2</Link>
        </li>
        <li>
          <Link to="#">3</Link>
        </li>
        <li class="disabled">
          <Link to="#">4</Link>
        </li>
        <li>
          <Link to="#">5</Link>
        </li>
        <li>
          <Link to="#">6</Link>
        </li>
        <li>
          <Link to="#">7</Link>
        </li>
        <li>
          <Link to="#">8</Link>
        </li>
        <li>
          <Link to="#">9</Link>
        </li>
        <li>
          <Link to="#">10</Link>
        </li>
      </ul>
    </div>
  );
}

export default LocatePage;
