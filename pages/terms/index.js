import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarOne from "../../layout/headers/NavbarOne";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";

// export const getStaticProps = async ({ locale }) => ({
//   props: { ...(await serverSideTranslations(locale, ["common"])) },
// });

const TermsAndConditions = () => {
  const [active, setActive] = useState("1");

  return (
    <>
      {/* <NavbarThree /> */}
      <NavbarThree />
      <Breadcrumb />
      <section className="user-dashboard terms-section">
        <Container>
          <Row className="log-in">
            <Col xl="3" lg="4">
              <div className="sidebar-user sticky-cls">
                <div className="dashboard-list">
                  <h5>Related Topics</h5>
                  <ul className="nav nav-tabs right-line-tab">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "1" ? "active" : ""}`}
                        href="#intro"
                        onClick={() => setActive("1")}
                      >
                        Introduction
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "2" ? "active" : ""}`}
                        href="#services"
                        onClick={() => setActive("2")}
                      >
                        What we do and what services we offer
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "3" ? "active" : ""}`}
                        href="#register"
                        onClick={() => setActive("3")}
                      >
                        Registering on the Platform
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "4" ? "active" : ""}`}
                        href="#modification"
                        onClick={() => setActive("4")}
                      >
                        Modifications to Terms
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "5" ? "active" : ""}`}
                        href="#fees"
                        onClick={() => setActive("5")}
                      >
                        Fees for Paid Services
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "6" ? "active" : ""}`}
                        href="#license"
                        onClick={() => setActive("6")}
                      >
                        License to Use the Platform
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "7" ? "active" : ""}`}
                        href="#obligations"
                        onClick={() => setActive("7")}
                      >
                        Your Obligations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "8" ? "active" : ""}`}
                        href="#intellectual"
                        onClick={() => setActive("8")}
                      >
                        Intellectual Property Rights
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === "9" ? "active" : ""}`}
                        href="#disclaimer"
                        onClick={() => setActive("9")}
                      >
                        Disclaimer
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "10" ? "active" : ""}`}
                        href="#idemnity"
                        onClick={() => setActive("10")}
                      >
                        Indemnity
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          active === "11" ? "active" : ""
                        }`}
                        href="#limitations"
                        onClick={() => setActive("11")}
                      >
                        Limitations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          active === "12" ? "active" : ""
                        }`}
                        href="#links"
                        onClick={() => setActive("12")}
                      >
                        Third Party links & services
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${active === "13" ? "active" : ""}`}
                        href="#termination"
                        onClick={() => setActive("13")}
                      >
                        Termination/Suspension of your account
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          active === "14" ? "active" : ""
                        }`}
                        href="#confidentiality"
                        onClick={() => setActive("14")}
                      >
                        Confidentiality
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          active === "15" ? "active" : ""
                        }`}
                        href="#communicate"
                        onClick={() => setActive("15")}
                      >
                        Communicating with You
                      </a>
                    </li>
                  </ul>
                  <div className="terms-bottom-content">
                    <img
                      src="/assets/images/others/1.svg"
                      alt=""
                      className="img-fluid"
                    />
                    {/* <a
                      href="text.txt"
                      className="btn btn-gradient btn-pill"
                      download
                    >
                      Download Doc
                    </a> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col xl="9" lg="8" sm="12">
              <div className="theme-card">
                <h2>Terms and Conditions</h2>
                <div className="terms-wrap">
                  <div className="terms-wrapper" id="intro">
                    <h4>Introduction</h4>
                    <p>
                      The website, viz, www.realutionz.com together with the
                      Realutionz Software is to be referred to as the “Platform”
                      that is developed, owned, operated, and maintained by
                      Realutionz Properties Pvt. Ltd., a company having its
                      registered office at EVERGLOW Business Centre (Ex
                      Chackacheril Tower) 3rd Floor, 24/515 (XI/781, C7),
                      Seaport-Airport Road, Kakkanad, Ernakulam-682037. These
                      terms and conditions are applicable to the use of the
                      Platform and the content appearing on the Platform by all
                      users of the Platform (“Users”), including Users who are
                      just browsing as well as registered Users who are either
                      Vendors or Customers (as defined below). Use of the
                      Platform is available only to persons who can form legally
                      binding contracts under applicable laws. If you are a
                      minor (a person less than 18 years as of the date of the
                      contract) it will be assumed that your use or transaction
                      on the Platform is made through your legal guardian or
                      parents who have given their consent to allow you to use
                      this Platform, at their risks and consequences. Realutionz
                      will not collect any personal data from minors. We
                      encourage parents and legal guardians to monitor their
                      minor dependents’ usage on the Platform and urge them in
                      enforcing our Privacy Policy by instructing their minor
                      dependents not to provide any personal information on the
                      Platform.
                    </p>
                    <p>
                      BY ACCESSING THE PLATFORM, YOU ARE AGREEING TO BE BOUND BY
                      THESE TERMS, ALL APPLICABLE LAWS AND REGULATIONS, AND OUR
                      PRIVACY POLICY AND AGREE THAT YOU ARE RESPONSIBLE FOR
                      COMPLIANCE WITH ALL APPLICABLE LAWS. THESE TERMS
                      CONSTITUTE A LEGAL AGREEMENT BETWEEN YOU AND REALUTIONZ.
                      IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT USE THE
                      PLATFORM AND/OR THE SERVICES.
                    </p>
                    <p>
                      If you are accepting these Terms and using the Platform on
                      behalf of a company, organization, government, or other
                      legal entity, you represent that you are authorized to do
                      so and have the authority to bind such entity to these
                      Terms, in which case the words “you” or “your” as used in
                      these Terms shall refer to such entity. All information,
                      graphics, documents, text, products, and all other
                      elements of the Platform and all services offered on this
                      Platform and services operated through the Platform,
                      available for your use are also subject to the Terms set
                      forth in this document.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="services">
                    <h4>What we do and what services we offer:</h4>
                    <p>
                      <strong> Realutionz</strong> is an online platform that
                      helps small and medium businesses that provide services to
                      a large customer base or who wish to avail services
                      offered by the Platform, to connect with their customers,
                      generate demand-driven leads and carry on business in a
                      cost-effective manner and the Customers, in turn, can
                      avail a host of services/products offered by Vendors
                      registered on the Platform.
                    </p>
                    <p>
                      <strong> Paid Services:</strong> We may provide the
                      following suite of services (“Paid Services”) to Vendors
                      for a fee as published in the Paid Services section of our
                      Platform and subject to your payment of the applicable
                      fees, you can avail the applicable services:
                    </p>
                    <ul>
                      <li>
                        <p>
                          <strong>Accounts:</strong> Vendors (such as cable TV
                          operators, internet service providers, residents’
                          associations, newspaper vendors, milkmen, etc.) with a
                          large customer base without in-depth accounting
                          knowledge can effectively monitor and manage accounts
                          of their business, billing, payment, and collection
                          process. Our Platform has an accounting back-end
                          software that provides automated billing, collection,
                          and accounting processes which help even a layman
                          easily manage his/her business activities and keep
                          control over the cash flow and fund flow of his/her
                          business.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Trade at Realutionz:</strong> Vendors
                          registered on the Platform who sell/offer a specific
                          product/service can be directly contacted by Customers
                          requiring the product/service or respond to Customers’
                          needs and quote a price based on general inquiries by
                          Customers posted on the Platform.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Job at Realutionz:</strong> We provide
                          recruitment/hiring services with easy matching /
                          identifying facilities for the right
                          candidate/employer. The employer (who is the Vendor
                          for the purpose of this feature) has to be a Paid User
                          in order to search for candidates.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Property at Realutionz:</strong> We offer real
                          estate services to facilitate renting/ leasing/ sale
                          of real estate properties, whereby owners or brokers
                          of the properties (who are the Vendor for the purpose
                          of this feature) need to publish details of available
                          properties which Customers looking for real estate can
                          search for.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="register">
                    <h4>Registering on the Platform</h4>
                    <ul>
                      <li>
                        <p>
                          The Platform may be accessed or viewed without any
                          registration. In order to avail of the services on the
                          Platform, be it Paid Services as a Vendor or Free
                          Services as a Customer (collectively the “Services”),
                          you are required to register on the Platform. Both
                          individuals and non-individuals (like corporates,
                          firms, etc) are eligible to register on the Platform.
                          A Vendor registering for Paid Services is required to
                          provide his/her name, address, ID proof, phone number,
                          and email ID as mandatory and to optionally provide
                          GSTIN and GSTIN address. Without registering on the
                          Platform, you will only be able to view the
                          information provided on the Platform about us and the
                          Services we offer and some additional basic
                          information about us. Users shall cooperate with
                          Realutionz and its officers, representatives,
                          directors, and agents and render assistance to
                          Realutionz in the integration of the Platform (and the
                          software powering it), if so, required by Realutionz,
                          for the purpose of enabling and providing the
                          Services.
                        </p>
                      </li>
                      <li>
                        <p>
                          A person registered as a Vendor and availing of Paid
                          Services is also eligible to avail at any time of the
                          Free Services offered on the Platform as a Customer
                          and no fresh registration as a Customer is required
                          for the same. A person registered as a Customer, would
                          need to provide additional information to register as
                          a Vendor (without changing his/her login ID) and make
                          payment for the Paid Services as applicable in order
                          to avail of the Paid Services.
                        </p>
                      </li>
                      <li>
                        <p>
                          You are solely responsible to maintain the
                          confidentiality of your login credentials and password
                          to the Platform and for all activities occurring
                          there. Realutionz shall not be liable for any loss or
                          damage arising from your non-compliance with this term
                          and/or immediate notification to Realutionz in the
                          event you suspect any unauthorized use of your
                          account/login details.
                        </p>
                      </li>
                      <li>
                        <p>
                          You hereby unconditionally authorize/approve
                          Realutionz to publish any and all information provided
                          as part of this Platform registration, (except email
                          address and password) to authenticate the
                          Customers/Vendors and/or to facilitate networking
                          among its Users.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="modification">
                    <h4>Modifications to Terms</h4>
                    <p>
                      Realutionz reserves the right, at its sole discretion, to
                      change, modify, add or remove portions of these Terms at
                      any time without any prior notice to you. By using this
                      Platform and/or the Services you are agreeing to be bound
                      by the then-current version of these Terms.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="fees">
                    <h4>Fees for Paid Services</h4>
                    <p>
                      If you elect to use Paid Services, the pricing, payment,
                      and billing policies posted on the Platform for each of
                      the Paid Services shall be applicable. Realutionz may add
                      new services for additional fees and charges, or amend
                      fees and charges for existing Paid Services, at any time.
                      You will be able to make payments for the Paid Services
                      through your app store. The amount paid for any Paid
                      Services is non-refundable. All charges for Paid Services
                      do not include applicable taxes or duties, which will be
                      charged additionally. You will be solely responsible for
                      the security and confidentiality of your payment methods.
                      You agree and accept that Realutionz has arrangements with
                      authorized affiliates, banks, financial institutions, and
                      payment processors for the collection of the fees
                      applicable for Paid Services and you shall strictly adhere
                      to the terms of such authorized affiliates, banks,
                      financial institutions, and payment processors with
                      respect to the payment of the fees. In case Realutionz or
                      its authorized affiliates, banks, financial institutions,
                      and payment processors are unable to collect the
                      applicable fees from you for any reason whatsoever,
                      including, without limitation, on account of any technical
                      malfunction, you agree and undertake to promptly pay the
                      same to Realutionz or its authorized affiliates, banks,
                      financial institutions, and payment processors as the case
                      may be. In case of the non-payment of the applicable fees
                      for the Paid Services, Realutionz reserves the right to
                      discontinue the Paid Services and/or restrict your access
                      to the Paid Services on the Platform. The fees for the
                      Paid Services, as displayed on the Platform, are subject
                      to change. Realutionz reserves the right to modify the
                      fees for various Paid Services at any time with a
                      notification to you. In case of your continued use of the
                      Platform, it shall be deemed that you have accepted such
                      revised fees. Realutionz shall process the payments based
                      on information provided by Users. Realutionz shall not be
                      responsible for any losses or damages caused due to any
                      discrepancy in the details provided by a User.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="license">
                    <h4>License to Use the Platform</h4>
                    <p>
                      These Terms are applicable to all Users of the Platform
                      including those who use the Paid Services and those who
                      use the Free Services offered on or via the Platform in
                      any manner. Subject to your acceptance of these Terms, we
                      grant you a non-exclusive, non-transferable, limited
                      license to access and use the Platform. This is the grant
                      of a license, not a transfer of title, and under this
                      license, you may not:
                    </p>
                    <ul>
                      <li>
                        <p>Modify or copy the materials in the Platform;</p>
                      </li>
                      <li>
                        <p>
                          Use the materials for any public display (commercial
                          or non-commercial) or for any derivative use;
                        </p>
                      </li>
                      <li>
                        <p>
                          Attempt to decompile or reverse engineer the software
                          and/or the proprietary technology that powers the
                          Platform;
                        </p>
                      </li>
                      <li>
                        <p>
                          Remove any copyright or other proprietary notations
                          from the materials; or
                        </p>
                      </li>
                      <li>
                        <p>
                          Transfer the materials in the Platform to another
                          person or “mirror” the materials on any other server.
                        </p>
                      </li>
                      <li>
                        <p>
                          Download or copy account information or personal
                          information of any other User.
                        </p>
                      </li>
                      <li>
                        <p>
                          All right, titles, and interests in and to the
                          Platform (excluding third-party content and links)
                          shall remain the exclusive property of Realutionz. The
                          Platform is protected by copyright, trademark, and
                          other laws of both India and foreign countries.
                          Nothing in these Terms gives you a right to use our
                          name or any of our trademarks, logos, domain names,
                          and other distinctive brand features.
                        </p>
                      </li>
                      <li>
                        <p>
                          You agree to adhere to all limitations on
                          dissemination, use, and reproduction of any materials
                          that you access on the Platform.
                        </p>
                      </li>
                      <li>
                        <p>
                          This license shall automatically terminate if you
                          violate any of these restrictions and may be
                          terminated by Realutionz at any time. Upon the
                          termination of this license, you must destroy any
                          downloaded materials in your possession whether in
                          electronic or printed format.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="obligations">
                    <h4>Your Obligations</h4>
                    <ul>
                      <li>
                        <p>
                          You shall provide true, accurate, and correct
                          information only on the Platform while registering
                          with us or while uploading any content on the
                          Platform.
                        </p>
                      </li>
                      <li>
                        <p>
                          You shall ensure that there are proper security
                          measures at your respective desktop, mobile device, or
                          other device used to access the Platform/avail the
                          Services to prevent any hacking and you accept all
                          liabilities with respect to any compromise or
                          unauthorized use or disclosure or access to such
                          information. You shall notify Realutionz immediately
                          upon learning of any unauthorized use of your username
                          or password. For any instruction, communication, or
                          other information, Realutionz receives from someone
                          using your username and password, Realutionz is
                          entitled to consider such instruction, communication,
                          or other information as having been sent by you.
                        </p>
                      </li>
                      <li>
                        <p>
                          You agree to use the Services, Platform(s), and the
                          materials provided herein only for purposes that are
                          permitted by: (a) Our terms and policies; and (b) any
                          applicable law, regulation, or generally accepted
                          practices or guidelines in India.
                        </p>
                      </li>
                      <li>
                        <p>
                          You agree not to access (or attempt to access) the
                          Platform and the materials or Services by any means
                          other than through the interface that is provided by
                          Realutionz. You shall not use any deep link, robot,
                          spider, or another automatic device, program,
                          algorithm or methodology, or any similar or equivalent
                          manual process, to access, acquire, copy or monitor
                          any portion of the Platform, or in any way reproduce
                          or circumvent the navigational structure or
                          presentation of the Platform, materials or any
                          Realutionz Content (as defined below), to obtain or
                          attempt to obtain any materials, documents or
                          information through any means not specifically made
                          available through the Platform.
                        </p>
                      </li>
                      <li>
                        <p>
                          You shall not use this Platform or avail the Services
                          for any purpose that is unlawful, prohibited by these
                          Terms, or in any way interferes or attempts to
                          interfere with the proper working of this Platform.
                          You may not use this Platform or Services in any
                          manner that could damage, disable, overburden, or
                          impair this Platform or Services, or that interferes
                          with any third party's use and enjoyment of this
                          Platform or Services. You agree that you will not use
                          any third-party software that intercepts, "mines", or
                          otherwise collects information from or through the
                          Platform or Services we offer. You may not obtain or
                          attempt to obtain any materials or information through
                          any means not intentionally made available by
                          Realutionz to all Users of this Platform. You shall
                          not institute, assist, or become involved in an attack
                          upon the Realutionz servers or otherwise attempt to
                          disrupt the Realutionz servers. Any attempt by you to
                          damage the Realutionz servers or undermine the
                          legitimate operation of Realutionz is a violation of
                          criminal and civil laws and, should such an attempt be
                          made or assistance for such an attack be provided,
                          Realutionz reserves the right to seek damages from any
                          such User to the fullest extent permitted by law.
                        </p>
                      </li>
                      <li>
                        <p>
                          You understand that by using the Platform, you may
                          encounter material that you may think is offensive,
                          indecent, or objectionable and that such material may
                          or may not be identified as having explicit material.
                          We shall have no liability to you for such material.
                          Further, you may report such offensive material and if
                          we believe it to be necessary, we may remove any
                          material.
                        </p>
                      </li>
                      <li>
                        <p>
                          You may not submit, transmit or display any content on
                          the Platform which may be deemed as defamatory,
                          libellous, obscene, harassing, threatening,
                          incendiary, abusive, racist, offensive, deceptive or
                          fraudulent, encouraging criminal or harmful conduct,
                          or which otherwise violates the rights of Realutionz
                          or any third party (including any intellectual
                          property rights, privacy rights, contractual or
                          fiduciary rights), or otherwise shows any person,
                          entity or brand in a bad or disparaging light, without
                          their prior explicit approval.
                        </p>
                      </li>
                      <li>
                        <p>
                          You may not post, send or upload to the Platform or
                          otherwise use the Platform to design, develop,
                          distribute and/or otherwise transmit or execute any
                          content that contains any virus, worm, trojan horse,
                          time bomb, web bug, cancelbot, spyware, malware, or
                          any other computer code, file, or program that may or
                          is intended to damage or hijack the operation of any
                          hardware, software, or telecommunications equipment,
                          or any other actually or potentially harmful,
                          disruptive, or invasive code or component. In relation
                          to the content that will be shared through the
                          Platform by third parties or by you, you understand
                          that Realutionz cannot and does not guarantee that
                          such content will be free of infection or viruses,
                          worms, trojan horses, or other code or defects that
                          manifest contaminating or destructive properties.
                          Realutionz agrees to not knowingly post or send via
                          the Platform any files (i.e., files created by
                          Realutionz) that contain a virus, bug, cancelbot,
                          worm, trojan horse, or another harmful item. However,
                          both parties understand that they cannot and do not
                          guarantee or warrant that files or software of any
                          kind, or from any source, available for downloading
                          through the Platform or using the Services, will be
                          free of infection or viruses, worms, trojan horses or
                          other code or defects that manifest contaminating or
                          destructive properties.
                        </p>
                      </li>
                      <li>
                        <p>
                          You may not take any action that imposes an
                          unreasonable or disproportionately large load on the
                          infrastructure of the Platform or otherwise interfere
                          with or disrupt the operation of any of our Services,
                          or the servers that host them or make them available,
                          or disobey any requirements, procedures, policies, or
                          regulations of such servers. You may not use any of
                          the Services and/or Platform in connection with any
                          form of spam, unsolicited mail, fraud, scam, phishing,
                          "chain letters", "pyramid schemes" or similar conduct,
                          or otherwise engage in unethical marketing or
                          advertising. If we conclude that you're violating any
                          of these policies, or engaging in any other behaviour
                          we deem abusive or inappropriate, we may take action
                          against you.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="intellectual">
                    <h4>Intellectual Property Rights</h4>
                    <ul>
                      <li>
                        <p>
                          <strong>“IPR”</strong> for the purpose of these Terms,
                          shall mean all copyrights (including without
                          limitation the exclusive right to reproduce,
                          distribute copies of, display and perform the
                          copyrighted work and to prepare derivative works),
                          copyright registrations, and applications, trademark
                          rights (including, without limitation, registrations
                          and applications), patent rights (whether registered
                          or unregistered), trade names or business names,
                          registered and unregistered design rights, mask work
                          rights, trade secrets, moral rights, rights in
                          packaging, goodwill, and other intellectual property
                          rights, and all renewals, updations, and extension
                          thereof and all rights or forms of protection of a
                          similar nature or having an equivalent or similar
                          effect to any of the above, which may subsist anywhere
                          in the world, regardless of whether any of such rights
                          arise under the laws of India or any other state,
                          country or jurisdiction.
                        </p>
                      </li>
                      <li>
                        <p>
                          The content made available on the Platform shall
                          include content from either of the following two
                          categories:
                        </p>
                      </li>
                      <li>
                        <p>
                          Any content generated by the Users and aggregated on
                          the Platform including but not limited to information
                          about the products/services offered, details about the
                          User, invoices, bills, etc, video and audio clips,
                          chat messages, photos uploaded onto or shared via the
                          Platform between Users, messages and/or opinions
                          and/or Feedbacks, reviews, comments, questions,
                          highlights, and other information including Users’
                          names, profiles, etc. generated solely by Users and
                          made available via the Platform{" "}
                          <strong>(“User Generated Content”)</strong>.
                        </p>
                      </li>
                      <li>
                        <p>
                          Content made available by Realutionz on its Platform,
                          and owned by Realutionz including the Platform{" "}
                          <strong>(“Realutionz Content”)</strong>
                        </p>
                      </li>
                      <li>
                        <p>
                          We reserve all rights to the Platform’s look and feel.
                          Some parts of the Platform are licensed under
                          third-party open-source licenses. You shall not copy
                          or adapt our code or visual design elements (including
                          logos) without express written permission from
                          Realutionz. We own and have the right to use all IPR
                          to and into the trademark Realutionz, to the Platform,
                          to Realutionz Content and to Feedback (defined below),
                          including, without limitation, a compilation of all
                          content, software, any and all rights, title and
                          interest in and to copyright, related rights, patents,
                          utility models, designs, know-how, trade secrets and
                          inventions (patent pending), goodwill, images, logos,
                          source code, meta tags, databases, text, content,
                          graphics, icons, used on the Platform save and except
                          any such IPR in User Generated Content/third-party
                          content. “Feedback” shall mean and include any
                          feedback provided by you regarding the
                          services/products availed from a Vendor (if you are a
                          Customer), feedback provided by you as a Vendor about
                          a Customer, feedback provided by Realutionz to you
                          based on responses received from Users of the
                          Platform, ratings of your services/products or of you
                          as a Customer, any feedback provided by you regarding
                          the Platform or Services or its use or any suggestions
                          for improvement, enhancements or derivatives. You
                          acknowledge and confirm (i) that Feedback shall be
                          solely owned by Realutionz; (ii) that you shall not
                          have any IPR in/to the said Feedback; (iii) that
                          Feedback shall not, under any circumstance, constitute
                          your confidential information and (iv)that Realutionz
                          may use such Feedback, in any manner Realutionz deems
                          fit, without payment of royalty or any other
                          consideration to you or any other person or entity.
                        </p>
                      </li>
                      <li>
                        <p>
                          Realutionz does not claim any IPR over the User
                          Generated Content you provide/share via the Platform.
                          All rights in the User Generated Content remain with
                          the User. You retain ownership over all User Generated
                          Content that you upload or share via the Platform;
                          however, by making the same public, you agree to allow
                          others to view Content that you post publicly on the
                          Platform. You are responsible for compliance of the
                          User Generated Content with any applicable laws or
                          regulations including but not limited to the IPR of
                          any third party.
                        </p>
                      </li>
                      <li>
                        <p>
                          By uploading your User Generated Content, you agree:
                          (i) to allow other Users to view the User Generated
                          Content you post publicly; (ii) to allow Realutionz to
                          store, and in the case of User Generated Content you
                          post publicly, display and use your User Generated
                          Content; and (iii) that Realutionz can, at any time,
                          review and delete all the User Generated Content
                          submitted through the Platform, although the Platform
                          is not obligated to do so.
                        </p>
                      </li>
                      <li>
                        <p>
                          Notwithstanding anything contained in this Clause 7,
                          Realutionz shall have the non-exclusive, worldwide,
                          and royalty-free license to use the names, images
                          trademarks, service marks, and logos associated with
                          your User Generated Content to promote its Services.
                          You grant Realutionz a non-exclusive, transferable,
                          sub-licensable, royalty-free, worldwide license to
                          host, use, distribute, modify, run, copy, publicly
                          perform or display, translate and create derivative
                          works of any User Generated Content provided by you,
                          including but not limited to photos and videos of the
                          products/services listed by you.
                        </p>
                      </li>
                      <li>
                        <p>
                          Use of any content on the Platform or provided through
                          the Services we offer for any purpose which is not
                          expressly permitted in these Terms, is prohibited.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="disclaimer">
                    <h4>Disclaimer</h4>
                    <ul>
                      <li>
                        <p>
                          Any use or reliance on any materials posted on the
                          Platform or obtained by you through the Platform is at
                          your own risk. The Platform and the Services are
                          provided on an “as is” and “as available” basis.
                          Realutionz does not endorse, support, or guarantee the
                          completeness, accuracy, or reliability of the Limited
                          Services or the Platform or make any warranties,
                          expressed or implied, and hereby disclaims and negates
                          all other warranties, including without limitation,
                          implied warranties or conditions of merchantability,
                          fitness for a particular purpose, or non-infringement
                          of intellectual property or other violation of rights,
                          all of which Realutionz expressly disclaims.
                        </p>
                      </li>
                      <li>
                        <p>
                          You acknowledge that, although the internet is often a
                          secure environment, sometimes there are interruptions
                          in service or events and Realutionz shall not be
                          responsible for any interruption of services and/or
                          loss of any data while transmitting information
                          through the Platform or otherwise. You understand that
                          the Platform Services may be interrupted, suspended,
                          terminated, or unavailable at times for any reason
                          such as maintenance, server failure, etc. and we shall
                          not be liable to you in any manner for any of this.
                        </p>
                      </li>
                      <li>
                        <p>
                          Realutionz does not warrant that the Services will
                          meet your requirements or make any representations
                          concerning the accuracy, likely results, or
                          reliability of the use of the Services on its Platform
                          or otherwise relating to such materials or on any
                          sites linked to this Platform. We also do not warrant
                          that the Platform or any other website that may be
                          linked to the Platform will be available on a
                          consistent basis, or that the Platform or the Services
                          will be uninterrupted or free from defects, viruses,
                          or other harmful material.
                        </p>
                      </li>
                      <li>
                        <p>
                          No advice or information, whether oral or written,
                          obtained by you from us through the Platform or
                          through your usage of the Services shall create any
                          warranty, representation, or guarantee not expressly
                          stated in these Terms.
                        </p>
                      </li>
                      <li>
                        <p>
                          Realutionz reserves the right to refuse the usage or
                          download of the Realutionz App or access to the
                          Services for any Users at its own discretion.
                          Realutionz shall not be liable for any such refusal in
                          any manner whatsoever.
                        </p>
                      </li>
                      <li>
                        <p>
                          Complying with all applicable privacy, consumer, and
                          other laws and regulations with respect to your (i)
                          provision, sharing, receipt, and use of User Generated
                          Content and (ii) use of the Services, is solely your
                          responsibility.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="idemnity">
                    <h4>Indemnity</h4>
                    <p>
                      You agree to indemnify, defend and hold us and our
                      partners, staff, and affiliates harmless from any
                      liability, loss, or claimed expense, including reasonable
                      attorney's fees, related to your violation of these Terms
                      or your violation of any applicable laws.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="limitations">
                    <h4>Limitations</h4>
                    <ul>
                      <li>
                        <p>
                          In no event shall Realutionz or its representatives or
                          service providers be liable under any contract,
                          negligence, strict liability, or, other legal or
                          equitable grounds for any damages (including, without
                          limitation, any special, incidental, punitive,
                          indirect or consequential damages or damages for loss
                          of data or profit, or due to business interruption,)
                          arising out of the use or inability to use/access the
                          Platform or the Services, even if Realutionz’s orator
                          authorized representative of Realutionz has been
                          notified orally or in writing of the possibility of
                          such damage. We are also not liable to you or any
                          third party (for any monetary or other damage suffered
                          by you or such third party) owing to any omissions,
                          errors, inaccuracies, delays, failures, interruptions,
                          viruses, defects, deletions, failure in networks or
                          communications lines, destruction, theft or
                          unauthorized access to your network, system or
                          computer or on account of you accidentally or
                          intentionally sharing User Generated Content
                          publically or if another person shares your User
                          Generated Content without your authorization. In no
                          event shall Realutionz be liable for a total and
                          aggregate liability amount under these Terms or under
                          any agreement or other terms and conditions in place
                          between you and Realutionz in excess of the number of
                          fees paid by you, if any, within one (1) year prior to
                          the date of such claim for the applicable services use
                          giving rise to liability. Some jurisdictions do not
                          allow the exclusion of certain warranties or the
                          limitation or exclusion of liability for incidental or
                          consequential damages. Accordingly, to that extent,
                          some of the above limitations as set out herein may
                          not apply to you.
                        </p>
                      </li>
                      <li>
                        <p>
                          Vendors and Customers are completely responsible for
                          working out the exchange and performance of services.
                          Realutionz is not responsible for any non-performance
                          or breach of any contract entered into between the
                          Vendors and Customers. Realutionz cannot and does not
                          guarantee that the concerned Vendor will perform any
                          transaction concluded on this Platform or that the
                          Customer will make payments as per the invoices raised
                          on him/her. Both Customer and Vendor do hereby agree
                          that Realutionz shall not be required to mediate or
                          resolve any dispute or disagreement that might arise
                          between the parties out of these transactions. Vendors
                          and Customers are responsible for researching and
                          complying with these Terms (including but not limited
                          to their confidentiality obligations as set out in
                          Clause 14 below) and any applicable laws, regulations,
                          or restrictions on items, services, or manner of sale
                          or exchange that may pertain to transactions in which
                          they participate. At no time shall this Platform have
                          any obligations or liabilities in respect of all/any
                          transaction entered into between the Vendor and
                          Customer (including for breach of any confidentiality
                          between the Vendor and Customer). Realutionz is not
                          responsible for the unsatisfactory or delayed
                          performance of services or damages if any incurred
                          during service by any Vendor.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="links">
                    <h4>Third Party links & services</h4>
                    <ul>
                      <li>
                        <p>
                          Realutionz may provide Users with access to
                          third-party tools and services and certain content,
                          products, and services available on the Platform may
                          include materials from third parties which Realutionz
                          neither monitors nor has any control over.
                        </p>
                      </li>
                      <li>
                        <p>
                          Realutionz has not reviewed all of the sites linked to
                          its Platform and is not responsible for the contents
                          of any such linked site. The inclusion of any
                          third-party link does not imply endorsement by
                          Realutionz of such a site. You acknowledge and agree
                          that Realutionz provides access to such third-party
                          links, websites, tools, and services “as is” and “as
                          available” without any warranties, representations, or
                          conditions of any kind and without any endorsement and
                          Realutionz does not warrant and will not have any
                          liability or responsibility for any third-party
                          materials or websites, or for any materials, products,
                          or services of third-parties. Realutionz shall have no
                          liability whatsoever arising from or relating to your
                          use of optional third-party tools and services. You
                          are requested to review the third-party’s policies and
                          practices carefully and make sure that you understand
                          them. Complaints, concerns, or questions regarding
                          third-party products should be directed to the third
                          party and use of any such linked site or third-party
                          services is at your own risk.
                        </p>
                      </li>
                      <li>
                        <p>
                          You acknowledge that, except for materials clearly
                          identified as being those of Realutionz, Realutionz
                          does not operate, control, or endorse any materials
                          transmitted via the Platform or using the Services.
                          Except for Realutionz materials, Realutionz has no
                          responsibility whatsoever relating to the User
                          Generated Content shared amongst you and another User
                          (be it a Customer or Vendor). Realutionz shall not
                          under any circumstance be liable if any person with
                          whom you have shared User Generated Content (or any
                          person who gains unauthorized access to your content)
                          shares the same with other persons without your
                          permission or authorization. In the event, another
                          User or any other person shares your User-Generated
                          Content with another third party without your
                          permission or authorization your sole recourse for any
                          damage or loss you suffer in connection therewith
                          shall lie with the said person and Realutionz
                          disclaims all liability in relation thereof. You agree
                          to indemnify and hold harmless Realutionz from any and
                          all claims, losses, liabilities, and damages relating
                          to User Generated Content you uploaded or shared via
                          the Platform or using the Services.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="termination">
                    <h4>Termination/Suspension of your account</h4>
                    <p>
                      You may at any time discontinue your use of the Platform,
                      and/or the Services. We also have the right to terminate
                      or suspend your access to the Platform, or Services or any
                      part thereof, at our sole discretion, without giving any
                      notice or reasons thereof. You agree that we may access,
                      preserve, suspend or terminate your information and access
                      to the Platform and/or the Services and disclose relevant
                      information, if required to do so by law or if we
                      genuinely believe that such act is reasonably necessary or
                      in the event of your breach of these Terms or Privacy
                      Policy. We also have the right to immediately initiate
                      legal proceedings under applicable laws, against Users for
                      fraudulent use of the Platform, and/or Services and/or any
                      other unlawful acts or omissions in breach of these Terms.
                      You will not be entitled to any refunds upon any
                      termination by Realutionz unless specifically provided for
                      in these Terms. Even if we suspend or terminate your
                      access to the Platform or usage of the Services, you will
                      still be liable to us, for any act of yours before such
                      suspension or termination.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="confidentiality">
                    <h4>Confidentiality</h4>
                    <ul>
                      <li>
                        <p>
                          For the purposes of these Terms, the term
                          “Confidential Information” shall mean and include all
                          tangible and intangible information obtained,
                          developed or disclosed or accessed including all
                          documents, data papers and statements and trade secret
                          of the User relating to its business practices and
                          considered to be confidential and proprietary
                          information. Realutionz shall strictly safeguard the
                          Confidential Information and shall take all the
                          necessary action to protect it against misuse.
                          Realutionz shall be entitled to disclose the
                          Confidential Information where: (i) such Confidential
                          Information is in or enters the public domain without
                          Realutionz’s default; (ii) such Confidential
                          Information is known to Realutionz at the time of
                          first receipt, or thereafter becomes known to
                          Realutionz prior to such disclosure without similar
                          restrictions from a source other than the User, as
                          evidenced by written records; (iii) such Confidential
                          Information is disclosed to employees, consultants,
                          auditors, advisors, and shareholders of the party who
                          are under a duty of confidentiality, or pursuant to
                          applicable Law or order of any governmental authority;
                          (iv) such Confidential Information is required to be
                          disclosed to partners of Realutionz for the provision
                          of Services (including, without limitation, any
                          services to be provided by the partners) or (v) such
                          Confidential Information is required to be disclosed
                          in compliance with applicable laws.
                        </p>
                      </li>
                      <li>
                        <p>
                          In case the User comes into possession of any
                          Confidential Information of Realutionz’s the User
                          shall safeguard the same and shall not disclose such
                          Confidential Information without the prior written
                          consent of Realutionz.
                        </p>
                      </li>
                      <li>
                        <p>
                          In order to facilitate interaction among Users of the
                          Platform, and the Services we offer, you may be
                          allowed to access certain information about other
                          Users. You agree to treat information about other
                          Users in strict accordance with these Terms and to the
                          restrictions on the types of User Generated Content
                          you may submit to the Platform or using the Services
                          as stated in our Privacy Policy. In all cases, you
                          must give such Users an opportunity to request to be
                          removed from your database and a chance to review what
                          information you have collected about them. In
                          addition, under no circumstances, except as described
                          in this section, you agree to only disclose personally
                          identifiable information about another User or the
                          User Generated Content shared by another User to any
                          third party if you have the written consent of such
                          User.
                        </p>
                      </li>
                      <li>
                        <p>
                          The Platform will allow you to access your transaction
                          details and User Generated Content you send to or
                          receive from the Platform or by using the Services for
                          a limited period of time, as may be announced by
                          Realutionz from time to time. Notwithstanding the
                          foregoing, Realutionz will not delete the User
                          Generated Content details you share via the Platform
                          with another User for a period of fewer than 6 months,
                          provided that your account is active and in good
                          standing. You are solely responsible for saving and
                          securely maintaining your profile and registration
                          information and all of your User Generated
                          Content/transaction details. Therefore, you should
                          take proactive measures to store your User Generated
                          Content and transaction details within your own
                          computers/devices, in order to preserve the
                          accessibility of the same beyond the retention period
                          applicable to you.
                        </p>
                      </li>
                      <li>
                        <p>
                          You agree to only submit User Generated Content to the
                          Platform or using the Service if you have a right to
                          reproduce, disclose, and distribute the same. You
                          agree to defend, indemnify, and hold Realutionz
                          harmless for any third-party claim brought against
                          Realutionz alleging that User Generated Content you
                          submit using the Service or through the Platform
                          violates any applicable law or infringes the IPR of
                          others ("Improper Use Claim"). In the event of an
                          Improper Use Claim, Realutionz shall (i) promptly
                          notify you in writing of any such Improper Use Claim;
                          (ii) permit you to control and direct the
                          investigation, preparation, defense, and settlement of
                          the claim; and (iii) provide reasonable assistance and
                          cooperate with you in the defense of same, at your
                          expense.
                        </p>
                      </li>
                      <li>
                        <p>
                          You hereby grant Realutionz the right to access all
                          information, data and details stored or available on
                          the Platform, including, without limitation, any
                          Confidential Information, that is required or
                          necessary for Realutionz for the provision of the
                          Services. You agree and accept that Realutionz may
                          store, transfer, process and utilize your information,
                          data and details, including, without limitation, any
                          Confidential Information, in connection with the
                          provision of Services, including without limitation,
                          store such information, data and details in the
                          servers of Realutionz.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="communicate">
                    <h4>Communicating with You</h4>
                    <p>
                      Any communication sent to your email, mobile number, or to
                      such other contact address or number you provide to
                      Realutionz shall constitute valid notice from Realutionz
                      to you. You acknowledge and agree to keep Realutionz
                      informed in a timely manner of any change in the contact
                      details as well as the details of your payment instrument.
                      Realutionz is entitled to rely on the validity of the
                      contact information (email addresses, fax number, or
                      otherwise) for the designated contacts you provide
                      Realutionz, even if Realutionz receives an automated
                      response email indicating that the email might not or did
                      not reach its intended recipient.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="disclaimer">
                    <h4>Governing law</h4>
                    <p>
                      Our rights and obligations pursuant to these Terms are
                      governed by and shall be construed in accordance with the
                      laws of India and the place of jurisdiction shall be
                      exclusively in Kochi, Kerala, India.
                    </p>
                  </div>
                  <div className="terms-wrapper" id="disclaimer">
                    <h4>Miscellaneous</h4>
                    <ul>
                      <li>
                        <p>
                          We shall not be deemed to have waived any right
                          available to us under these Terms unless the waiver is
                          in writing. A failure to exercise or delay in
                          exercising any right will not serve as a waiver.
                        </p>
                      </li>
                      <li>
                        <p>
                          If any provision of these Terms is determined to be
                          invalid or unenforceable in whole or in part, such
                          invalidity or unenforceability shall attach only to
                          such provision or part of such provision and the
                          remaining part of such provision and all other
                          provisions of these Terms shall continue to be in full
                          force and effect.
                        </p>
                      </li>
                      <li>
                        <p>
                          The rights and remedies available to us under these
                          Terms are independent, cumulative and without
                          prejudice to our rights under law and equity.
                        </p>
                      </li>
                      <li>
                        <p>
                          None of the provisions of these Terms shall be deemed
                          to constitute a partnership or agency between you/User
                          and Realutionz and you shall have no authority to bind
                          Realutionz in any manner whatsoever.
                        </p>
                      </li>
                      <li>
                        <p>
                          Any notice sent to the other party under this
                          Agreement must be in writing and in the English
                          language, where such notification relates to the Terms
                          or other legal issues.
                        </p>
                      </li>
                      <li>
                        <p>
                          You may not assign or transfer these Terms and your
                          rights and obligations under this without the prior
                          written consent of Realutionz. Realutionz may assign
                          our interest hereunder to any now-existing or future
                          direct or indirect subsidiary of ours, or pursuant to
                          any assignment of the Platform or Services, or any
                          corporate sale or restructuring. We may also assign or
                          delegate certain of our rights and responsibilities
                          under these Terms to independent contractors or other
                          third parties and we agree to bind any such
                          independent contractors or third parties to the same
                          obligations and standards of performance contained in
                          these Terms. In any case, Realutionz will retain
                          ultimate and complete responsibility for the full
                          performance of these Terms, whether certain
                          responsibilities have been delegated to any such third
                          party, or not.
                        </p>
                      </li>
                      <li>
                        <p>
                          These Terms are the complete and exclusive statement
                          and absolute integration of the mutual understanding
                          of the parties and supersede and cancel all previous
                          and contemporaneous written and oral agreements,
                          representations, proposals, discussions, and
                          communications relating to the subject matter of these
                          Terms. You agree to be bound by the most current
                          version of these Terms that are posted on the
                          Platform. We may ask you to agree to additional terms
                          for certain features or services we may introduce in
                          the future, which will govern to the extent there is a
                          conflict between these Terms and such additional
                          terms.
                        </p>
                      </li>
                      <li>
                        <p>
                          Each party acknowledges that any breach by a party of
                          these terms’ provisions may cause irreparable damage
                          to the other party and that a remedy at law may be
                          inadequate. Therefore, in addition to any other legal
                          or equitable remedies, a party will be entitled to
                          seek injunctive relief for any breach of these Terms.
                          All article or section headings, or exhibit names, are
                          for reference and convenience only and shall not be
                          considered in the interpretation of the Terms.
                        </p>
                      </li>
                      <li>
                        <p>
                          In the event of any force majeure conditions, the
                          obligations of parties involved in any service shall
                          be suspended. If the force majeure condition persists
                          for longer than sixty (60) days, the respective
                          contract for service shall be automatically
                          terminated.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="terms-wrapper" id="disclaimer">
                    <h4>Grievance Officer</h4>
                    <p>
                      By Information Technology Act 2000 and the rules made
                      there under, the name and contact details of the Grievance
                      Officer are provided below: Name: Realutionz Properties
                      Private Limited, Email Id: info@realutionz.com
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterThree />
    </>
  );
};

export default TermsAndConditions;
