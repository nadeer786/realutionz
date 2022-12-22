import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Modal, ModalBody } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/blog";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});
import Img from "../../../utils/BackgroundImageRatio";
import { getData } from "../../../utils/getData";

const Blog = () => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState();
  const router = useRouter();
  const { id } = router.query;
  const toggle = () => setModal(!modal);
  useEffect(() => {
    getData(`${process.env.LOCAL_API_URL}/property`)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((item) => item.id === id)
            .pop()
        );
      })
      .catch((error) => console.log("Error", error));
  }, [id]);
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={false} data={value}>
        <div className="blog-detail-image">
          <div className="play-bg-image">
            <div>
              <img
                src={value?.img}
                alt=""
                style={{
                  width: "100%",
                  height: "550px",
                }}
              />
            </div>
            <div className="icon-video">
              <a onClick={() => setModal(true)}>
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
        <Modal
          className="video-modal"
          centered
          size="lg"
          isOpen={modal}
          toggle={toggle}
          modalTransition={{ timeout: 100 }}
        >
          <ModalBody className="m-0 p-0">
            <Button
              onClick={toggle}
              type="button"
              className="btn-close"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </Button>
            <iframe src={value?.video} allowFullScreen></iframe>
          </ModalBody>
        </Modal>
      </BodyContent>
      <FooterThree />
    </>
  );
};

export default Blog;
