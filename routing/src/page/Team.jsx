import React from 'react'

function Team() {
  return (
   <div>
  {/* Page Header Start */}
  <div className="page-header container-fluid bg-primary d-flex flex-column align-items-center justify-content-center">
    <h1 className="display-3 text-uppercase mb-3">Team</h1>
    <div className="d-inline-flex text-white">
      <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
      <h6 className="m-0 px-3">/</h6>
      <h6 className="text-uppercase m-0">Team</h6>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
      <div className="owl-carousel team-carousel position-relative" style={{paddingLeft: 30}}>
        <div className="team-item rounded overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid w-100" src="img/team-1.jpg" alt />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
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
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
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
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
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
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
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
</div>

  )
}

export default Team
