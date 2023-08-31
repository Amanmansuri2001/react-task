import React from "react";
import { Helmet } from "react-helmet";

function Index() {
  return (
    <div>
      {/* Header Start */}
  <div className="container-fluid bg-primary py-5 px-0" style={{marginBottom: 90}}>
    <div className="row mx-0 align-items-center">
      <div className="col-lg-6 px-md-5 text-center text-lg-left">
        <h1 className="display-2 text-uppercase mb-3">Best Digital Marketing Agency</h1>
        <p className="text-dark mb-4">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
          Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
          lorem dolore sed stet et est justo dolore.</p>
        <a href className="btn btn-dark text-uppercase mt-1 py-3 px-5">Learn More</a>
      </div>
      <div className="col-lg-6 px-0 text-right">
        <img className="img-fluid mt-5 mt-lg-0" src="img/header.png" alt />
      </div>
    </div>
  </div>
  {/* Header End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
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
      {/* Services Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Creative Services
          </h1>
          <div className="row">
            <div className="col-lg-3 mb-2">
              <div className="service-item rounded p-5 mb-4">
                <i className="fa fa-3x fa-laptop-code text-primary mb-4" />
                <h4 className="text-uppercase mb-4">
                  Web <span className="d-block text-body">Design</span>
                </h4>
                <p className="m-0">
                  Vero amet vero eos kasd justo ipsum diam sed elitr
                </p>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="service-item rounded p-5 mb-4">
                <i className="fa fa-3x fa-code text-primary mb-4" />
                <h4 className="text-uppercase mb-4">
                  Web <span className="d-block text-body">Development</span>
                </h4>
                <p className="m-0">
                  Vero amet vero eos kasd justo ipsum diam sed elitr
                </p>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="service-item rounded p-5 mb-4">
                <i className="fa fa-3x fa-envelope-open-text text-primary mb-4" />
                <h4 className="text-uppercase mb-4">
                  Digital <span className="d-block text-body">Marketing</span>
                </h4>
                <p className="m-0">
                  Vero amet vero eos kasd justo ipsum diam sed elitr
                </p>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="service-item rounded p-5 mb-4">
                <i className="fa fa-3x fa-edit text-primary mb-4" />
                <h4 className="text-uppercase mb-4">
                  Content <span className="d-block text-body">Writing</span>
                </h4>
                <p className="m-0">
                  Vero amet vero eos kasd justo ipsum diam sed elitr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
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
      
     {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Meet Our Team
          </h1>
          <div
            className="owl-carousel team-carousel position-relative"
            style={{ paddingLeft: 30 }}
          >
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h4 className="text-uppercase">John Doe</h4>
                <p className="m-0">CEO, Founder</p>
              </div>
            </div>
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h4 className="text-uppercase">Kate Wilson</h4>
                <p className="m-0">Designer</p>
              </div>
            </div>
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h4 className="text-uppercase">John Brown</h4>
                <p className="m-0">Developer</p>
              </div>
            </div>
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/team-4.jpg" alt />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h4 className="text-uppercase">Paul Watson</h4>
                <p className="m-0">Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
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
      {/* Contact Start */}
      <div className="container-fluid py-5 px-0">
        <div className="row mt-5 mx-0">
          <div className="col-12 px-0" style={{ height: 500 }}>
            <div className="position-relative h-100">
              <iframe
                className="position-relative w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
        <div
          className="row mx-0 justify-content-center"
          style={{ marginTop: "-200px" }}
        >
          <div className="col-lg-6 col-md-8 col-sm-10 px-0">
            <div className="contact-form bg-white rounded p-5">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 p-4"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control bg-light border-0 p-4"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 p-4"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control bg-light border-0 py-3 px-4"
                    rows={5}
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary text-uppercase py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/isotope/isotope.pkgd.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>

        <script src="mail/jqBootstrapValidation.min.js"></script>
        <script src="mail/contact.js"></script>

        <script src="js/main.js"></script>
      </Helmet>
    </div>
  );
}

export default Index;
