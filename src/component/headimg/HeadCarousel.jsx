import { Link } from "react-router-dom";
import Pic1 from "../../assets/carousel_image/Pic1.jpg";
import Pic2 from "../../assets/carousel_image/Pic2.jpg";
import Pic3 from "../../assets/carousel_image/Pic3.jpg";

function HeadCarousel() {
  return (
    <div className="BigCur">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className=" carousel-inner PicCur ">
          <div className="  setImgHead carousel-item active position-relative">
            <Link to="/content">
              <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
              <img
                src={Pic1}
                className=" d-block w-100  postition-absolute top-50 "
                alt="Blog 1"
              />
            </Link>
          </div>
          <div className="carousel-item position-absolute">
            <Link to="/content">
              <img src={Pic2} className="d-block w-100" alt="..." />
              <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </Link>
          </div>

          <div className="carousel-item position-absolute">
            <Link to="/content">
              <img src={Pic3} className="d-block w-100" alt="..." />
              <div className="carousel-caption position-absolute top-50 start-50 translate-middle ">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HeadCarousel;
