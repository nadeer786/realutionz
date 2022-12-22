import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarOne from "../../layout/headers/NavbarOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../layout/footers/FooterThree";
import BodyContent from "../../components/careers";
import NavbarThree from "../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});

const Careers = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default Careers;
