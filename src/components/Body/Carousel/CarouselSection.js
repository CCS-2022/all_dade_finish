import Carousel from "react-bootstrap/Carousel";
import galleryOne from "../../../assets/gallery-1.jpg";
import galleryTwo from "../../../assets/gallery-2.JPG";
import galleryThree from "../../../assets/gallery-3.jpg";
import "./CarouselSection.css";

function CarouselSection() {
  return (
    <div className="main-div" id="gallery">
      <Carousel className="carousel-view">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={galleryOne} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img-two"
            src={galleryTwo}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={galleryThree} alt="Third slide" />
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
