import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterLink from "./elements/FooterLink";
import FooterBlog from "./footerThreeElements/FooterBlog";
import FooterContactUsDetails from "./footerThreeElements/FooterContactUsDetails";
import SubFooterTwo from "./elements/SubFooterTwo";
import { Link } from "react-feather";
import { getData } from "../../utils/getData";

const FooterThree = () => {
  const [isActive, setIsActive] = useState();
  const [footerBlog, setFooterBlog] = useState();
  useEffect(() => {
    getData(`${process.env.LOCAL_API_URL}/property`)
      .then((res) => {
        setFooterBlog(res.data.Blogs);
        // gridDispatch({
        //   type: "totalPages",
        //   payload: Math.ceil(res.data.LatestBlogInCorporate.length / 6),
        // });
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <footer>
      <div className="footer footer-bg">
        <Container>
          <Row>
            <FooterContactUsDetails />
            <Col xl="9">
              <Row>
                <FooterLink
                  value={FooterData.usefulLinks}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
                {/* <FooterLink value={FooterData.feature} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterData.social} isActive={isActive} setIsActive={setIsActive} /> */}
                <Col lg="3" xl="4">
                  <div className="footer-links">
                    <h5
                      className={`footer-title ${
                        isActive === "subscribe" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsActive("subscribe");
                        isActive === "subscribe" && setIsActive();
                      }}
                    >
                      ERNAKULAM OFFICE
                      <span className="according-menu">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </h5>
                    <div
                      className={`footer-content ${
                        isActive === "subscribe"
                          ? "d-block"
                          : "d-none d-md-block"
                      }`}
                    >
                      <p className="mb-0">
                        EVERGLOW Business Center
                        <br />
                        24/515, C7, 3rd floor,
                        <br />
                        Kakkanad, Kerala 682037
                      </p>
                      <div className="address">
                        <div className="contact-info">
                          <i className="fa fa-phone"></i>
                          <a href="tel:+91 75111 55991">
                            <p>+91 75111 55991</p>
                          </a>
                        </div>
                        <div className="contact-info">
                          <i className="fa fa-envelope"></i>
                          <a href="mailto:info@realutionz.com">
                            <p>info@realutionz.com</p>
                          </a>
                        </div>
                      </div>

                      {/* <ul>
                        <li>
                          <div className="address">
                            <i className="fa fa-phone"></i>
                            <p>+91 75111 55991</p>
                          </div>
                        </li>
                        <li>
                          <div className="address">
                            <i className="fa fa-envelope"></i>
                            <p>+91 75111 55991</p>
                          </div>
                        </li>
                      </ul> */}
                      {/* <form>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            required
                          />
                          <span className="input-group-apend">
                            <button
                              type="submit"
                              className="input-group-text"
                              id="basic-addon2"
                            >
                              <i className="fas fa-paper-plane"></i>
                            </button>
                          </span>
                        </div>
                      </form> */}
                    </div>
                  </div>
                </Col>
                <Col lg="3" xl="4">
                  <div className="footer-links">
                    <h5
                      className={`footer-title ${
                        isActive === "subscribe" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsActive("subscribe");
                        isActive === "subscribe" && setIsActive();
                      }}
                    >
                      KOTTAYAM OFFICE
                      <span className="according-menu">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </h5>
                    <div
                      className={`footer-content ${
                        isActive === "subscribe"
                          ? "d-block"
                          : "d-none d-md-block"
                      }`}
                    >
                      <p className="mb-0">
                        NITS Tower - 2nd Floor,
                        <br />
                        Neelimanagalam, MC Road,
                        <br />
                        Peumpaikadu P.O,
                        <br />
                        Kottayam, Kerala 686016
                      </p>
                      <div className="address">
                        <div className="contact-info">
                          <i className="fa fa-phone"></i>
                          <a href="tel:+91 75111 55991">
                            <p>+91 75111 55993</p>
                          </a>
                        </div>
                        <div className="contact-info">
                          <i className="fa fa-envelope"></i>
                          <a href="mailto:info@realutionz.com">
                            <p>info@realutionz.com</p>
                          </a>
                        </div>
                      </div>
                      {/* <form>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            required
                          />
                          <span className="input-group-apend">
                            <button
                              type="submit"
                              className="input-group-text"
                              id="basic-addon2"
                            >
                              <i className="fas fa-paper-plane"></i>
                            </button>
                          </span>
                        </div>
                      </form> */}
                    </div>
                  </div>
                </Col>
              </Row>
              <FooterBlog data={footerBlog} />
            </Col>
          </Row>
        </Container>
      </div>
      <SubFooterTwo />
    </footer>
  );
};

export default FooterThree;
