import Carousel from "react-bootstrap/Carousel";
import gallery1 from "../../../assets/gallery-1.jpg";
import gallery2 from "../../../assets/gallery-2.JPG";
import gallery3 from "../../../assets/gallery-3.jpg";
import gallery4 from "../../../assets/gallery-4.jpeg";
import gallery5 from "../../../assets/gallery-5.jpeg";
import gallery6 from "../../../assets/gallery-6.jpeg";
import gallery7 from "../../../assets/gallery-7.jpeg";
import gallery8 from "../../../assets/gallery-8.jpeg";
import gallery9 from "../../../assets/gallery-9.jpeg";
import gallery10 from "../../../assets/gallery-10.jpeg";
import gallery11 from "../../../assets/gallery-11.jpeg";
import "./CarouselSection.css";

function CarouselSection() {
  return (
    <div className="main-div" id="gallery">
      <p className="gallery-title">Previous Work</p>
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="carousel-img" src={gallery1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={gallery2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={gallery3} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={gallery4} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={gallery5} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={gallery6} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={gallery7} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={gallery8} />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default CarouselSection;
