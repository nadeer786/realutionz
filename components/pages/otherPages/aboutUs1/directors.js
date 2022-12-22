import Image from "next/image";
import jos from "../../../../public/assets/images/MD/md1.png";
import gig from "../../../../public/assets/images/MD/gig.png";
import irs from "../../../../public/assets/images/MD/irs.png";
import ish from "../../../../public/assets/images/MD/ish.png";
import job from "../../../../public/assets/images/MD/job.png";
import prat from "../../../../public/assets/images/MD/prat.png";
import prm from "../../../../public/assets/images/MD/prm.png";
import raj from "../../../../public/assets/images/MD/raj.png";
import ras from "../../../../public/assets/images/MD/ras.png";
import sur from "../../../../public/assets/images/MD/sur.png";
import tom from "../../../../public/assets/images/MD/tom.png";

const Directors = () => {
  return (
    <section style={{ padding: "0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Meet Our Expert Team</h2>
            <br />
            <h3 className="text-center">Managing Director</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center ">
            <Image
              src={ish}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              Ishac Vattamkandathil
            </h6>
          </div>
          <div className="col-md-3"></div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">Our Directors</h3>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 text-center">
            <Image
              src={irs}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              M M Irshad
            </h6>
          </div>
          <div className="col-md-3 text-center">
            <Image
              src={sur}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center " style={{ paddingTop: "10px" }}>
              Surendran Valiaveettil
            </h6>
          </div>
          <div className="col-md-3 text-center">
            <Image
              src={gig}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              Gigi Mathew
            </h6>
          </div>
          <div className="col-md-3 text-center">
            <Image
              src={job}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              Jobin Vayalil
            </h6>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3 text-center">
            <Image
              src={tom}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center " style={{ paddingTop: "10px" }}>
              Toms George
            </h6>
          </div>
          <div className="col-md-3 text-center">
            <Image
              src={jos}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              T J Joseph
            </h6>
          </div>
          <div className="col-md-3 text-center">
            <Image
              src={raj}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              Rajesh Padinhakare
            </h6>
          </div>
          <div className="col-md-3 text-center">
            <Image
              src={prm}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              Pramod K S
            </h6>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 text-center"></div>

          <div className="col-md-4 text-center">
            <Image
              src={ras}
              alt="background"
              style={{ width: "200px", height: "90%", borderRadius: "80px" }}
            />
            <h6 className="text-center" style={{ paddingTop: "10px" }}>
              Abdul Rasheed O.M
            </h6>
          </div>
          <div className="col-md-4 text-center"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Directors;
