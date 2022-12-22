/**
 * It takes an array of objects as a prop and returns a slider with the data from the array
 * @returns An array of objects.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import {
  Discover,
  PropertyServices,
  PropertyServicesDetail,
  WhatWeDoTitle,
} from "../../../constValues/constValues";
import { serviceSlider } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";

const WhatWeDo = ({ value }) => {
  return (
    <section className="service-section service-1 bg-light">
      <Container>
        <Row>
          <Col>
            <div className="title-2">
              <h2>{WhatWeDoTitle}</h2>
              <p>{Discover}</p>
            </div>
            <Row className=" property-service column-space">
              {value?.map((data, i) => (
                <Col xl="3" md="6" className=" wow fadeInUp" key={i}>
                  <div className="service-box">
                    <div className="icon-round">{data.img}</div>
                    <h3>
                      <Link href="/pages/other-pages/services">
                        {data.title}
                      </Link>
                    </h3>
                    <p>{data.details}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
