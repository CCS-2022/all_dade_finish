import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="white-section" id="services">
      <div className="container-fluid">
        <div className="row">
          <p className="service-summary">
            We specialize in interior remodeling. We are dedicated to provide
            best customer service possible.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-2 ">
            <p className="service-title__main">Services:</p>
          </div>
          <div className="col-lg-5">
            <p className="service-title">Kitchen:</p> <br></br>
            Request a kitchen design now. If you want to modernize and update
            your kitchen or build it from scratch we have all the tools in place
            to assist. We assist with kitchen budgets from removing and
            installing to purchasing and installing countertops and other
            accessories.
          </div>
          <div className="col-lg-5 ">
            <p className="service-title">Bathroom:</p> <br></br>
            We plan and design a new floor print or optimize the current for the
            best utility and comfort possible. We demolition and rebuild a brand
            new dream bathroom from the ground up. We guide you through the
            process of purchasing all the accessories for the ideal look.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 "></div>
          <div className="col-lg-5 ">
            <p className="service-title">Flooring:</p> <br></br>
            Tile or wood, we do it all. We remove the old flooring and install
            your choice of material that will match the ideal interior design.
            Tiles are installed to perfection with no buckled tiles. Wood,
            Vinyl, and Waterproof flooring are great ways to change an interior
            of a house and our team specializes in this type of work.
          </div>
          <div className="col-lg-5 ">
            <p className="service-title">Interior:</p> <br></br>
            Interior reconstruction from moving walls to opening spaces for a
            modern open view to complete teardown and full plaster and paint, we
            do it all. Competitive market pricing for all interior designs. All
            projects are done to the specifics of the clients and will be
            adjusted for the dream house.
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
