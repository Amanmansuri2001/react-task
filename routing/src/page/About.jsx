import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-primary d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-3 text-uppercase mb-3">About</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>                    
          <h6 className="m-0 px-3">/</h6>
          <h6 className="text-uppercase m-0">About</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* About Start */}
      <div className="container-fluid pt-5">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt />
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 text-uppercase mb-4">
                Best digital agency in downtown
              </h1>
              <h5 className="text-uppercase text-primary mb-3">
                Clita elitr et amet et ipsum sea. Ipsum stet kasd ea et no est
                duo diam. Lorem dolores eos ut nonumy ipsum sit clita lorem no
                amet dolor dolore, stet sit dolor justo
              </h5>
              <p className="mb-4">
                Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor
                vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea
                sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut
                ipsum. Labore diam et nonumy amet dolores. Volup sit labore
                dolores erat, magna justo sed lorem kasd ea dolor. Labore sit
                clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.
              </p>
              <a href className="btn btn-primary text-uppercase py-3 px-5">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* About Info Start */}
      <div className="container-fluid py-5">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-light rounded mb-4 px-5"
                style={{ height: 150 }}
              >
                <i className="fa fa-3x fa-map-marker-alt text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h5 className="text-uppercase">Our Office</h5>
                  <p className="m-0">123 Street, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-light rounded mb-4 px-5"
                style={{ height: 150 }}
              >
                <i className="fa fa-3x fa-envelope-open text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h5 className="text-uppercase">Email Us</h5>
                  <p className="m-0">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-light rounded mb-4 px-5"
                style={{ height: 150 }}
              >
                <i className="fas fa-3x fa-phone-alt text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h5 className="text-uppercase">Call Us</h5>
                  <p className="m-0">+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Info End */}
       
    </div>
  );
}

export default About;
