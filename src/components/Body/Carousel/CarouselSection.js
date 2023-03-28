import Carousel from "react-bootstrap/Carousel";
import galleryOne from "../../../assets/gallery-1.jpg";
import galleryTwo from "../../../assets/gallery-2.JPG";
import galleryThree from "../../../assets/gallery-3.jpg";
import galleryFour from "../../../assets/gallery-10.jpeg";
import "./CarouselSection.css";

function CarouselSection() {
  return (
    <div className="main-div" id="gallery">
      <p className="gallery-title">Previous Work</p>
      <Carousel className="carousel-view">
        <Carousel.Item interval={1000}>
          <img className="d-block carousel-img" src={galleryOne} />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block carousel-img" src={galleryTwo} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block carousel-img" src={galleryThree} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block carousel-img" src={galleryFour} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSection;
