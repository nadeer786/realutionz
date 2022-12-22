/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import { AppPropertyData } from "../../../data/appPropertyData";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import FeatureSection from "./Feature";
import HomeBannerSection from "./HomeBanner";
import OfferSection from "./Offer";
import PropertySection from "./Property";
import SalePropertySection from "./SaleProperty";
import TestimonialSection from "./Testimonial";
import AboutUsSection from "../../pages/otherPages/aboutUs2/AboutUs";
import PropertyServicesSection from "../classic/PropertyServices";

import WhatWeDo from "./WhatWeDo";
import LandService from "./LandService";

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property/getPremium`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <HomeBannerSection />
      <AboutUsSection />
      {/* <SalePropertySection value={value?.LatestForSalePropertyData} /> */}
      <LandService value={AppPropertyData.LandServices} />
      <PropertySection value={value} />
      {/* <FeatureSection value={value} /> */}
      {/* <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} /> */}
      <BannerSection />
      {/* <AboutSection value={clientData?.MeetOurAgent} /> */}
      <WhatWeDo value={AppPropertyData.WhatWeDo} />
      <TestimonialSection value={AppPropertyData.Testimonials} normal={true} />
      {/* <BrandSection /> */}
    </>
  );
};

export default BodyContent;
