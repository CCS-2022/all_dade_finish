import React, { Fragment } from "react";
import CarouselSection from "./components/Body/Carousel/CarouselSection";
import Contact from "./components/Body/Contact/Contact";

import Services from "./components/Body/ServicesSection/Services";
import VideoSection from "./components/Body/VideoSection/VideoSection";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
// import Modal from "./components/UI/Modal";

function App() {




  return (
    <Fragment>
      <main>
        <NavigationBar></NavigationBar>
        <VideoSection></VideoSection>
        <Services></Services>
        <CarouselSection></CarouselSection>
        <Contact  ></Contact>
  
        <Footer></Footer>
      </main>
    </Fragment>
  );
}

export default App;
