/**
 * It returns a section with a container with a row with three columns, each of which has a div with a
 * contact icon, a heading, and a paragraph
 * @returns The ContactDetailsSection component is being returned.
 */
import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";

const ContactDetailsSection = () => {
  return (
    <section className="small-section contact_section pt-0 contact_bottom">
      <Container>
        <Row>
          <Col lg="4" sm="6">
            <div className="contact_wrap">
              <MapPin />
              <h4>ERNAKULAM OFFICE</h4>
              <p className="font-roboto">
                EVERGLOW Business Center <br />
                24/515, C7, 3rd floor, <br />
                Kakkanad, Kerala 682037 <br />
                +91 75111 55991
              </p>
            </div>
          </Col>
          <Col lg="4" sm="6">
            <div className="contact_wrap">
              <MapPin />
              <h4>KOTTAYAM OFFICE</h4>
              <p className="font-roboto">
                NITS Tower - 2nd Floor, <br />
                Neelimanagalam, MC Road, <br />
                Peumpaikadu P.O, <br />
                Kottayam, Kerala 686016 <br />
                +91 75111 55993
              </p>
            </div>
          </Col>
          <Col lg="4" sm="6">
            <div className="contact_wrap">
              <Mail />
              <h4>Online service</h4>
              <ul>
                <li>Inquiries: info@realutionz.com</li>
                <li>+91 75111 55991</li>
                <li>+91 75111 55993</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetailsSection;
