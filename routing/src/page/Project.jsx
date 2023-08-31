import React from "react";

function Project() {
  return (
    <div>
      {/* Page Header Start */}
      <div className="page-header container-fluid bg-primary d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-3 text-uppercase mb-3">Projects</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>
          <h6 className="m-0 px-3">/</h6>
          <h6 className="text-uppercase m-0">Projects</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Portfolio Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Visit Our Projects
          </h1>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li
                  className="btn btn-outline-dark text-uppercase py-2 px-4 active"
                  data-filter="*"
                >
                  <i className="fa fa-star text-primary mr-2" />
                  All
                </li>
                <li
                  className="btn btn-outline-dark text-uppercase py-2 px-4"
                  data-filter=".first"
                >
                  <i className="fa fa-laptop-code text-primary mr-2" />
                  Design
                </li>
                <li
                  className="btn btn-outline-dark text-uppercase py-2 px-4"
                  data-filter=".second"
                >
                  <i className="fa fa-mobile-alt text-primary mr-2" />
                  Development
                </li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative rounded overflow-hidden mb-2">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-1.jpg"
                  alt
                />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                    <i className="fa fa-4x fa-plus text-primary" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative rounded overflow-hidden mb-2">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-2.jpg"
                  alt
                />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                    <i className="fa fa-4x fa-plus text-primary" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative rounded overflow-hidden mb-2">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-3.jpg"
                  alt
                />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                    <i className="fa fa-4x fa-plus text-primary" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative rounded overflow-hidden mb-2">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-4.jpg"
                  alt
                />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                    <i className="fa fa-4x fa-plus text-primary" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative rounded overflow-hidden mb-2">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-5.jpg"
                  alt
                />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                    <i className="fa fa-4x fa-plus text-primary" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative rounded overflow-hidden mb-2">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-6.jpg"
                  alt
                />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                    <i className="fa fa-4x fa-plus text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio End */}
    </div>
  );
}

export default Project;
