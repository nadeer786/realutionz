/**
 * It takes in an array of objects and returns a slider with each object as a slide
 * @returns A component that renders a section with a title, a slider, and a pricing box.
 */
import React from "react";
import Slider from "react-slick";
import { Card, Col, Container, Row } from "reactstrap";
import {
  LatestPropertyDetail,
  pricingPlan,
} from "../../constValues/constValues";
import { AppPropertyData } from "../../data/appPropertyData";
import { pricingSlider } from "../../data/slickSlider";
import NoSsr from "../../utils/NoSsr";
import PricingSection from "../home/corporate/Pricing";

const JobSection = ({ value }) => {
  return (
    <section className="pricing-section slick-between slick-shadow">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              {/* <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg> */}
              {/* <h2 dangerouslySetInnerHTML={{ __html: pricingPlan }}></h2> */}
              <h2>Join Us!</h2>
              {/* <p className="font-roboto">{LatestPropertyDetail}</p> */}
              <p>
                The real estate profession has expanded and offers one of the
                widest career selections in the business world today. It’s a lot
                of joy to work for a company where everyone is passionate about
                what they’re doing. We’re dedicated to bringing corporate
                application development to life with enthusiasm and a
                customer-centric approach. We put in long hours and take our
                work seriously. We, on the other hand, enjoy having a good time.
                We live by this idea every day in our business. Passion is one
                of our main values. You are welcome to apply for this position
                if you are an innovative individual with a positive attitude and
                a desire to advance your career.
              </p>
              <br />
              <p>
                Please send your CV to{' '}
                <strong>
                  {' '}
                  careers@realutionz.com
                </strong>{' '}
                ,
                <strong>
                  +91 75111 66990
                </strong>{' '}
                to be considered for a position
              </p>
            </div>
            <NoSsr>
              <div className="job-container">
                <div className="row" style={{'justify-content': 'center'}}>
                  <div className="job-card col-md-4" style={{ width: "470px" }}>
                    <Card className="pricing-slider" {...pricingSlider}>
                      {/* {value && */}
                      {/* value.map((data, i) => ( */}
                      <div>
                        <div className="pricing-box">
                          <div className="pricing-details">
                            {/* <div className="pricing-icon">
                          <svg className="pricing-svg"> */}
                            {/* <use xlinkHref={data.img}></use> */}
                            {/* </svg>
                        </div> */}
                            <h3>Executives for our Kochi Branch</h3>
                            <p className="font-roboto">(Preferred Males)</p>
                          </div>
                          <ul>
                            {/* {data.moreDetails.map((detail, i) => ( */}
                            <br />
                            Qualification: <strong>Degree</strong>
                            <li></li>
                            <br />
                            Salary: <strong>₹ 15000 or above</strong>
                            <li></li>
                            {/* ))} */}
                          </ul>
                          <div className="price">
                            <span className="label label-light label-flat">
                              Contact Us
                            </span>
                            {/* <h4>$ salary</h4> */}
                            <br />
                            <span>
                              Contact Number: <strong>+91 75111 55991</strong>
                            </span>
                            <br />
                            <span>
                              Share your CV to:{" "}
                              <strong>careers@realutionz.com</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* ))} */}
                    </Card>
                  </div>
                  <div className="job-card col-md-4" style={{ width: "470px" }}>
                    <Card className="pricing-slider" {...pricingSlider}>
                      {/* {value && */}
                      {/* value.map((data, i) => ( */}
                      <div>
                        <div className="pricing-box">
                          <div className="pricing-details">
                            {/* <div className="pricing-icon">
                          <svg className="pricing-svg"> */}
                            {/* <use xlinkHref={data.img}></use> */}
                            {/* </svg>
                        </div> */}
                            <h3>Sales Officers for our Kochi Branch</h3>
                            <p className="font-roboto">(Preferred Males)</p>
                          </div>
                          <ul>
                            {/* {data.moreDetails.map((detail, i) => ( */}
                            Experience in <strong>Real-Estate</strong> /
                            previously worked in{" "}
                            <strong>Home Loan Sector.</strong>
                            <li></li>
                            <br />
                            <strong>Lucrative Salary + Incentives</strong>
                            <li></li>
                            {/* ))} */}
                          </ul>
                          <div className="price">
                            <span className="label label-light label-flat">
                              Contact Us
                            </span>
                            {/* <h4>$ salary</h4> */}
                            <br />
                            <span>
                              Contact Number: <strong>+91 75111 55991</strong>
                            </span>
                            <br />
                            <span>
                              Share your CV to:{" "}
                              <strong>careers@realutionz.com</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* ))} */}
                    </Card>
                  </div>
                </div>
              </div>
              {/* <Slider className="pricing-slider" {...pricingSlider}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="pricing-box">
                        <div className="pricing-details">
                          <div className="pricing-icon">
                            <svg className="pricing-svg">
                              <use xlinkHref={data.img}></use>
                            </svg>
                          </div>
                          <h3>{data.title}</h3>
                          <p className="font-roboto">{data.details}</p>
                        </div>
                        <ul>
                          {data.moreDetails.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                        <div className="price">
                          <span className="label label-light label-flat">Month</span>
                          <h4>${data.price}</h4>
                          <span className="light-text">Per</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider> */}
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobSection;
