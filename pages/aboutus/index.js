import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarOne from "../../layout/headers/NavbarOne";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});
import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/otherPages/aboutUs1";
import NavbarThree from "../../layout/headers/NavbarThree";

const AboutUs = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default AboutUs;
