import Link from "next/link";
import React from "react";
import { Container, Row } from "reactstrap";

const SubFooterTwo = () => {
  return (
    <div className="sub-footer footer-light">
      <Container>
        <Row>
          <div className="col-xl-6 col-md-6">
            <div className="copy-right">
              <p className="mb-0">
                {`© ${new Date().getFullYear()} Realutionz, All Rights Reserved.`}
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 text-end">
            <ul className="sub-footer-link">
              <li>
                <Link href="/home/slider-filter-search">Home</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/cancellation-refund-policy">Cancellation & refund policy</Link>
              </li>
              <li>
                <Link href="contact-us">Contact</Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooterTwo;
