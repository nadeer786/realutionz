import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";
import { Logo3 } from "../../../components/elements/Logo";

const FooterContactUsDetails = () => {
  return (
    <Col xl="3">
      <div className="footer-details text-center">
        <Logo3 />
        <p>
          REALUTIONZ is one of the leading real estate dealers in Kerala, head
          quartered at Kochi.
        </p>
        <h6>SOCIAL</h6>
        <ul className="icon-list">
          <li>
            <Link href="https://www.facebook.com/realutionz">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@realutionzpropertiespvtltd913/featured">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/realutionz/">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="https://in.pinterest.com/realutionz/">
              <i className="fab fa-pinterest"></i>
            </Link>
          </li>
          <li>
            <Link href="https://mobile.twitter.com/realutionz">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
