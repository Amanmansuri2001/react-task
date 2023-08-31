import React from "react";

function Testomonial() {
  return (
    <div>
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-primary d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-3 text-uppercase mb-3">Testimonial</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>
          <h6 className="m-0 px-3">/</h6>
          <h6 className="text-uppercase m-0">Testimonial</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Client's Say
          </h1>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item position-relative text-center rounded p-4">
              <img
                className="img-fluid rounded mx-auto my-4"
                src="img/testimonial-1.jpg"
                alt
              />
              <h5 className="text-uppercase">Client Name</h5>
              <p className="text-uppercase">Profession</p>
              <p className="text-secondary">
                Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero
                eos. Lorem duo ipsum sea amet et clita dolor
              </p>
            </div>
            <div className="testimonial-item position-relative text-center rounded p-4">
              <img
                className="img-fluid rounded mx-auto my-4"
                src="img/testimonial-2.jpg"
                alt
              />
              <h5 className="text-uppercase">Client Name</h5>
              <p className="text-uppercase">Profession</p>
              <p className="text-secondary">
                Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero
                eos. Lorem duo ipsum sea amet et clita dolor
              </p>
            </div>
            <div className="testimonial-item position-relative text-center rounded p-4">
              <img
                className="img-fluid rounded mx-auto my-4"
                src="img/testimonial-3.jpg"
                alt
              />
              <h5 className="text-uppercase">Client Name</h5>
              <p className="text-uppercase">Profession</p>
              <p className="text-secondary">
                Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero
                eos. Lorem duo ipsum sea amet et clita dolor
              </p>
            </div>
            <div className="testimonial-item position-relative text-center rounded p-4">
              <img
                className="img-fluid rounded mx-auto my-4"
                src="img/testimonial-4.jpg"
                alt
              />
              <h5 className="text-uppercase">Client Name</h5>
              <p className="text-uppercase">Profession</p>
              <p className="text-secondary">
                Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero
                eos. Lorem duo ipsum sea amet et clita dolor
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default Testomonial;
