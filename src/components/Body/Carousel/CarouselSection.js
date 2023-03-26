import Carousel from "react-bootstrap/Carousel";
import galleryOne from "../../../assets/gallery-1_resized.jpg";
import galleryTwo from "../../../assets/gallery-2_resized.jpg";
import galleryThree from "../../../assets/gallery-3_resized.jpg";
import "./CarouselSection.css";

function CarouselSection() {
  return (
    <div className="main-div" id="gallery">
      <p className="gallery-title">Previous Work</p>
      <Carousel className="carousel-view">
        <Carousel.Item interval={1000}>
          <img className="d-block carousel-img" src={galleryOne} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block carousel-img"
            src={galleryTwo}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={galleryThree}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSection;
