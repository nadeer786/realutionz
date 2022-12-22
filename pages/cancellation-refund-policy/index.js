import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarOne from "../../layout/headers/NavbarOne";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});

const CancellationAndRefund = () => {
  const [active, setActive] = useState("1");

  return (
    <>
      {/* <NavbarThree /> */}
      <NavbarThree />
      <Breadcrumb />
      <section className="user-dashboard terms-section">
        <Container>
          <Row className="log-in">
            <Col xl="3" lg="4">
              <div className="sidebar-user sticky-cls">
                <div className="dashboard-list">
                  <h5>Related Topics</h5>
                  <ul className="nav nav-tabs right-line-tab">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "1" ? "active" : ""}`}
                        href="#intro"
                        onClick={() => setActive("1")}
                      >
                        Introduction
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "2" ? "active" : ""}`}
                        href="#services"
                        onClick={() => setActive("2")}
                      >
                        What we do and what services we offer
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "3" ? "active" : ""}`}
                        href="#return"
                        onClick={() => setActive("3")}
                      >
                        Return Requests
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "4" ? "active" : ""}`}
                        href="#modification"
                        onClick={() => setActive("4")}
                      >
                        Modifications to Terms
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "5" ? "active" : ""}`}
                        href="#refund"
                        onClick={() => setActive("5")}
                      >
                        Refund Policy
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "6" ? "active" : ""}`}
                        href="#license"
                        onClick={() => setActive("6")}
                      >
                        License to Use the Platform
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "7" ? "active" : ""}`}
                        href="#cancellation"
                        onClick={() => setActive("7")}
                      >
                        Cancellation Policy
                      </a>
                    </li>
                  </ul>
                  {/* <div className="terms-bottom-content">
                    <img
                      src="/assets/images/others/1.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <a
                      href="text.txt"
                      className="btn btn-gradient btn-pill"
                      download
                    >
                      Download Doc
                    </a>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col xl="9" lg="8" sm="12">
              <div className="theme-card">
                <h2>Cancellation & Refund Policy</h2>
                <div className="terms-wrap">
                  <div className="terms-wrapper" id="intro">
                    <h4>Introduction</h4>
                    <p>
                      We thank you and appreciate your purchase with us. Please
                      read the policy, conditions, and process carefully as they
                      will give you important information and guidelines about
                      your rights and obligations as our customer, concerning
                      any purchase you make through us. The policy concerning
                      the processing of the refund, shall be following the
                      clauses as set forth:
                    </p>
                  </div>
                  <div className="terms-wrapper" id="return">
                    <h4>1. Return Requests</h4>
                    <p>
                      Our Platform provides services to customers. There are no
                      physical products sold on the Platform and hence the
                      Platform does not allow returns to be requested on any
                      grounds and does not allow exchange requests to be made
                      under any circumstances whatsoever.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="refund">
                    <h4>2. Refund Policy</h4>
                    <p>
                      The Platform does not provide refunds for any of its
                      services. No refund shall be initiated after the payment
                      has been made - thus consumers are requested to give their
                      affirmation after critical thinking and properly
                      understanding the concerned service from the executives. ​
                      In case, the Platform cancels the concerned service
                      request, ONLY then the refunds shall be made to the bank
                      accounts of the customers as used at the time of booking
                      the services on the Platform. The Platform uses the
                      third-party payment gateway i.e., Razorpay for all
                      payments and transactions. ​ Any queries shall be made by
                      the customer by emailing Mail: "info@realutionz.com",
                      which will be the official mode of communication with the
                      Platform and the Firm. The Firm shall waive all other
                      means of communication made. ​ The money shall be refunded
                      between 2-5 business days after the cancellation of the
                      service request. All Refunds shall be made only at the
                      discretion of the Platform & the Firm.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="cancellation">
                    <h4>3. Cancellation Policy</h4>
                    <p>
                      The Firm at its sole discretion may cancel any booking(s)
                      made by the customer: if it suspects a customer has
                      undertaken a fraudulent transaction, or if it suspects a
                      customer has undertaken a transaction that is not
                      following the Terms of Use, or in case of unavailability
                      of a service, or for any reason outside the control of the
                      Firm, if the Firm does not want to do business with the
                      customer. ​ Further, while all measures are taken to
                      ensure the accuracy of service specifications and pricing,
                      the details of the services as reflected on the Platform
                      may be inaccurate due to technical issues or typographical
                      errors, and in such an event the Firm or the Platform
                      holds no liability regarding the same. We maintain a
                      negative list of all fraudulent transactions and
                      non-complying customers and reserve the right to deny
                      access to such customers at any time or cancel any
                      bookings placed by them in the future.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterThree />
    </>
  );
};

export default CancellationAndRefund;
