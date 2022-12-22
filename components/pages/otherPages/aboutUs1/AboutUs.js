import React from "react";
import { Container, Row } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";

const AboutUsSection = () => {
  return (
    <section className="about-main ratio_36">
      <Container>
        <Row>
          <div className="col">
            <div className="title-2">
              <h1>About Us</h1>
              {/* <p className='font-roboto'>Residences can be classified into different type of housing tenure can used for same physical type.</p> */}
            </div>
            <div className="user-about">
              <Row>
                <div className="col-xl-5 col-lg-7">
                  <div className="about-content">
                    {/* <h3>
                      We are the <br />
                      expert of communication
                    </h3> */}
                    <p className="font-roboto">
                      <strong>REALUTIONZ</strong> is one of the leading real
                      estate dealers in Kerala, head quartered at Kochi. We
                      started our journey on September 2021 with a vision to
                      provide quality and hassle-free property solutions to
                      customers. Our extensive real estate experience is
                      inherited from our directors who are designated property
                      consultants. Within a short span, we could emerge as one
                      of the most trusted property dealers in Kerala. Our
                      success can be credited to our awareness of client’s
                      demands and our consistent efforts to address those needs
                      through innovative E-commerce solution.
                    </p>
                    <br />
                    <p className="font-roboto">
                      <strong>Why Realutionz..?</strong> The only answer is the
                      uniqueness of our whole process. We offer the best real
                      estate end to end solution under one roof. Your database
                      and personal information are safe and secured digitally.
                      We don’t disclose the information to any third-party
                      vendors. Your trust is our strength.
                    </p>
                  </div>
                  {/* <div className='about-listing'>
                    <ul>
                      <li>
                        <h4>15,801</h4>
                        <p>Total property</p>
                      </li>
                      <li>
                        <h4>5792</h4>
                        <p>Agents</p>
                      </li>
                      <li>
                        <h4>3871</h4>
                        <p>Agency</p>
                      </li>
                      <li>
                        <h4>4791+</h4>
                        <p>Sold out property</p>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="col-xl-7 map-image col-lg-5">
                  <Img
                    src="/assets/images/section3.png"
                    className="img-fluid"
                    alt=""
                    style={{ height: "80%", width: "80%" }}
                  />
                </div>
                <div className="col-md-12">
                  <div className="about-content">
                    <h4>
                      <strong>Our Vision</strong>
                    </h4>
                    <p className="font-roboto">
                      Our vision is to be the nation’s premier real estate
                      service provider and the preferred place for property
                      seeking individuals to partner. We look forward to
                      developing collaborations that are based on transparency
                      and mutual trust, resulting in long-term engagements with
                      the clients.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="about-content">
                    <h4>
                      <strong>Our Mission</strong>
                    </h4>
                    <p className="font-roboto">
                      Our mission is to provide outstanding world-class service
                      to customers by blending our real estate experience with
                      customer needs. We are committed to keep up our values as
                      they have served our firm and clients well in the past.
                    </p>
                  </div>
                </div>
                {/* <div className="col-xl-7 map-image col-lg-5">
                  <Img
                    src="/assets/images/section3.png"
                    className="img-fluid bg-img"
                    alt=""
                  />
                  <div className="marker-icons">
                    <ul>
                      <li>
                        <img
                          className="img-fluid marker-1"
                          src="/assets/images/leaflet/marker-icon.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          className="img-fluid marker-2"
                          src="/assets/images/leaflet/marker-icon.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          className="img-fluid marker-3"
                          src="/assets/images/leaflet/marker-icon.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          className="img-fluid marker-4"
                          src="/assets/images/leaflet/marker-icon.png"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div> */}
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
