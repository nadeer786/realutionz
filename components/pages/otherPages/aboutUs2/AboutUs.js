import React from "react";
import { useTranslation } from "next-i18next";
import { Col, Container, Row } from "reactstrap";

const headContent =
  "REALUTIONZ is one of the leading real estate dealers in Keralahead quartered at Kochi.";

const AboutUsSection = () => {
  const { t } = useTranslation("common");
  return (
    <section className="about-main">
      <Container>
        <Row>
          <div className="col">
            <div className="title-2">
              <h2>About Us</h2>
              <p className="font-roboto">{t(headContent)}</p>
            </div>
            <div className="user-about">
              <Row>
                <div className="col-xl-7 col-lg-5">
                  <div className="about-image">
                    <div className="img-box side-left">
                      <img
                        src="/assets/images/about/about-us-img-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="side-effect"></div>
                    </div>
                    <div className="img-box img-abs side-right">
                      <img
                        src="/assets/images/about/about-us-img-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="side-effect"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-7">
                  <div className="about-content">
                    <p className="font-roboto">
                      REALUTIONZ is one of the leading real estate dealers in
                      Kerala, head quartered at Kochi. We started our journey on
                      September 2021 with a vision to provide quality and
                      hassle-free property solutions to customers. Our extensive
                      real estate experience is inherited from our directors who
                      are designated property consultants. Within a short span,
                      we could emerge as one of the most trusted property
                      dealers in Kerala. Our success can be credited to our
                      awareness of client’s demands and our consistent efforts
                      to address those needs through innovative E-commerce
                      solution. Why Realutionz..? The only answer is the
                      uniqueness of our whole process. We offer the best real
                      estate end to end solution under one roof. Your database
                      and personal information are safe and secured digitally.
                      We don’t disclose the information to any third-party
                      vendors. Your trust is our strength.
                    </p>
                  </div>
                  {/* <div className="about-listing">
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
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
