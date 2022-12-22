/**
 * It renders a section with a container, a row, and two columns. The first column contains a
 * container, which contains a div with a slider and a WhatAreYouLookingFor component. The second
 * column contains a div with an InputForm component
 * @returns The HomeBannerSection component is being returned.
 */
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { homeSlider1 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import WhatAreYouLookingFor from "../../elements/WhatAreYouLookingFor";
import HomeSliderContent from "./homeElements/HomeSliderContent";
import InputForm from "./homeElements/InputForm";
import RequestForm from "./homeElements/RequestForm";
import SearchForm from "./homeElements/SearchForm";

const HomeBannerSection = () => {
  const [propertyForm, setPropertyForm] = useState(false);
  const [lsRequestForm, setLsRequestForm] = useState(true);

  const handleLsRequestForm = () => {
    setLsRequestForm(true);
    setPropertyForm(false);
  };
  const handlePropertyForm = () => {
    setPropertyForm(true), setLsRequestForm(false);
  };
  return (
    <section className="home-section layout-1 layout-6">
      <div className="home-main">
        <Container>
          <Row>
            <Col lg="7">
              <Container>
                <div className="home-left">
                  <div>
                    {/* home main slider start*/}
                    <NoSsr>
                      <Slider
                        className="home-slider-1 arrow-light slick-shadow"
                        {...homeSlider1}
                      >
                        <HomeSliderContent
                          img="/assets/images/signature/2.png"
                          mainTitle="Realutionz Properties solve your problems"
                        />
                        <HomeSliderContent
                          img="/assets/images/signature/1.png"
                          mainTitle="Properties Seller"
                        />
                      </Slider>
                    </NoSsr>
                    {/* home main slider end*/}
                    {/* <WhatAreYouLookingFor /> */}
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl="4" lg="5">
              <div className="home-search-6">
                <div className="form-type-btn">
                  <div
                    className="btn btn-gradient"
                    style={{ padding: "6px 6px" }}
                    onClick={handleLsRequestForm}
                  >
                    Request Service
                  </div>
                  <div
                    className="btn btn-gradient"
                    style={{ padding: "6px 6px", marginLeft: "10px" }}
                    onClick={handlePropertyForm}
                  >
                    Search Property
                  </div>
                </div>

                <div className="vertical-search">
                  <div className="left-sidebar">
                    {/* <InputForm lastSm="6" /> */}
                    {lsRequestForm ? <RequestForm /> : <SearchForm />}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HomeBannerSection;
