import React, { Fragment } from "react";

const PropertyLabel = ({ labels }) => {
  return (
    <>
      {/* {Array.isArray(labels) &&
        labels?.transactionType?.map((values, i) => ( */}
      <Fragment>
        {labels === "sell" && (
          <div>
            <span className="label label-shadow">Sale</span>
          </div>
        )}
        {labels === "rent" && (
          <div>
            <span className="label label-dark">Rent</span>
          </div>
        )}
        {/* {values === "open house" && (
              <div>
                <span className='label label-success'>open house</span>
              </div>
            )}
            {values === "sold" && (
              <div>
                <span className='label label-shadow'>Sold</span>
              </div>
            )} */}
      </Fragment>
      {/* ))} */}
    </>
  );
};

export default PropertyLabel;
