import React from "react";
import { Row } from "reactstrap";

const DetailsProperty = ({ data }) => {
  return (
    <div className="details-property">
      <Row>
        <p className="col-xl-12">{data && data.detail}</p>
        {/* <p className="col-xl-4">
          Residential real estate may contain either a single family or
          multifamily structure that is available for occupation or for
          non-business purposes. Residences can be classified by and how they
          are connected to neighbouring residences and land. Different types of
          housing tenure can be used for the same physical type
        </p>
        <p className="col-xl-4">
          This rate of profitability occurred off the back of Australia’s
          longest housing market upswing on record, which was almost
          uninterrupted from September 1995 to January 2004, and saw housing
          values nationally increase by 109.7%.
        </p> */}
      </Row>
    </div>
  );
};

export default DetailsProperty;
