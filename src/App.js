import React, { Fragment } from "react";
import CarouselSection from "./components/Body/Carousel/CarouselSection";
// import Contact from "./components/Body/Contact/Contact";
import ContactTest from "./components/Body/Contact/ContactTest";
import Services from "./components/Body/ServicesSection/Services";
import VideoSection from "./components/Body/VideoSection/VideoSection";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";

function App() {
  async function infoHandler(info) {
    const response = await fetch(
      "http://emailapi.cloudconsultingandsolutions.com/send",
      {
        method: "POST",
        body: JSON.stringify(info),
        // mode: "no-cors",
        headers: {
          // " Access-Control-Allow-Headers": "content-type",
          "Content-Type": "application/json",
          // "CF-Access-Client-Id": "b3715a15e2cf684664b6ac7bbfb935f9.access",
          // "CF-Access-Client-Secret":
          //   " 02727e65aa2aee2a86a0bd3988cc74934f2de3d9bbcf1a28252b0ff2464eb95b",
        },
      }
    );
    // console.log(JSON.stringify(info));
    console.log(JSON.stringify(info));
    console.log(response);
    const data = await response.json();
    console.log(data);
  }

  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <VideoSection></VideoSection>
      <Services></Services>
      <CarouselSection></CarouselSection>
      <ContactTest onSendInfo={infoHandler}></ContactTest>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
