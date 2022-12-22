/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
import { getData } from "../../../../utils/getData";
import {
  DropdownInputFields,
  RequestDropdownInputFields,
} from "../../../elements/DropdownInputFields";
import RangeInputFields from "../../../elements/RangeInputFields";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../../../../utils/ReactstrapInputsValidation";

const RequestForm = ({ label, lg, sm, lastSm }) => {
  const [filterValues, setFilterValues] = useState({});

  const [value, setValue] = useState();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        service: "",
      }}
      validationSchema={Yup.object().shape({
        fullName: Yup.string().required(),
        email: Yup.string().required(),
        phone: Yup.number().required(),
        service: Yup.string().required(),
      })}
      onSubmit={(values) => {
        //   setActiveTab((prev) => prev + 1);
        //   setData((prev) => ({ ...prev, ...values }));
      }}
    >
      {() => (
        <Form>
          <Row className="gx-3">
            <Col sm="12" lg="12" xl="12">
              <Field
                name="fullName"
                component={ReactstrapInput}
                type="text"
                className="form-control text-filed"
                placeholder="Full Name"
              />
            </Col>
            <Col sm="12" lg="12" xl="12">
              <Field
                name="email"
                component={ReactstrapInput}
                type="email"
                className="form-control text-filed"
                placeholder="Email"
              />
            </Col>
            <Col sm="12" lg="12" xl="12">
              <Field
                name="phone"
                // label="Phone Number"
                component={ReactstrapInput}
                type="number"
                className="form-control text-filed"
                placeholder="Phone Number"
              />
            </Col>
            <Col sm="12" lg="12" xl="12">
              {/* <Dropdown
                isOpen={dropdownOpen}
                toggle={() => setDropdownOpen((prevState) => !prevState)}
              >
                <DropdownToggle className="font-rubik" caret>
                  Interested Service
                  <i className="fas fa-angle-down"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Item</DropdownItem>
                  <DropdownItem>Item</DropdownItem>
                  <DropdownItem>Item</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
              <Field
                name="service"
                component={ReactstrapSelect}
                className="form-control text-filed"
                inputprops={{
                  options: ["1", "2", "3", "4", "5", "6"],
                  defaultOption: "Interested Service",
                }}
              />
              {/* <Button
                type="button"
                className="font-rubik dropdown-toggle btn btn-secondary"
              >
                Service
              </Button> */}
            </Col>
            <Col sm="12" lg="12" xl="12">
              <Button className=" btn-gradient mt-3">Request</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default RequestForm;
