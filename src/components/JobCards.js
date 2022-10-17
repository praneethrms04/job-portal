import { CiLocationOn } from "react-icons/ci";
import { GoScreenFull } from "react-icons/go";

import Img from "../images/infosis.png";


const JobCards = () => {
  const clickhandler = () => {
    alert(
      "Congratulations 👏👏.You have submitted Your application successfylly.Further Updates visit Your Dashboad."
    );
  };
  return (
    <div className="d-flex justify-content-between m-3">
      {/* card1 */}
      <div className="card" style={{ width: 25 + "rem" }}>
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            <img
              className="rounded-circle my-3"
              width={100}
              height={100}
              src={Img}
              alt="companyImg"
            />
            <div className="mr-2 p-4">
              <h3>Infosis</h3>
              <p>
                <CiLocationOn className="mb-1" />
                4/5a, Sathyasai street, Puttaparthy.
              </p>
            </div>
          </div>
          <h4>React Developer</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            veritatis, facilis ipsam sit doloremque soluta hic laborum inventore
            at accusamus. Autem, deleniti! Quas qui nobis suscipit omnis eaque
            alias iste?
          </p>
          <div className="row">
            <div className="col">
              <GoScreenFull className="mb-1" />
              Full-Time
            </div>
            <div className="col">
              <button
                className="btn btn-outline-dark p-sm-1"
                onClick={clickhandler}
              >
                Apply Now
              </button>
            </div>
            <div className="col">5-6 LPA</div>
          </div>
        </div>
      </div>
      {/* card2 */}
      <div className="card" style={{ width: 25 + "rem" }}>
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            <img
              className="rounded-circle my-3"
              width={100}
              height={100}
              src={Img}
              alt="companyImg"
            />
            <div className="mr-2 p-4">
              <h3>Infosis</h3>
              <p>
                <CiLocationOn className="mb-1" />
                4/5a, Sathyasai street, Puttaparthy.
              </p>
            </div>
          </div>
          <h4>React Developer</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            veritatis, facilis ipsam sit doloremque soluta hic laborum inventore
            at accusamus. Autem, deleniti! Quas qui nobis suscipit omnis eaque
            alias iste?
          </p>
          <div className="row">
            <div className="col">
              <GoScreenFull className="mb-1" />
              Full-Time
            </div>
            <div className="col">
              <button
                className="btn btn-outline-dark p-sm-1"
                onClick={clickhandler}
              >
                Apply Now
              </button>
            </div>
            <div className="col">5-6 LPA</div>
          </div>
        </div>
      </div>

      {/* card3 */}
      <div className="card" style={{ width: 25 + "rem" }}>
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            <img
              className="rounded-circle my-3"
              width={100}
              height={100}
              src={Img}
              alt="companyImg"
            />
            <div className="mr-2 p-4">
              <h3>Infosis</h3>
              <p>
                <CiLocationOn className="mb-1" />
                4/5a, Sathyasai street, Puttaparthy.
              </p>
            </div>
          </div>
          <h4>React Developer</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            veritatis, facilis ipsam sit doloremque soluta hic laborum inventore
            at accusamus. Autem, deleniti! Quas qui nobis suscipit omnis eaque
            alias iste?
          </p>
          <div className="row">
            <div className="col">
              <GoScreenFull className="mb-1" />
              Full-Time
            </div>
            <div className="col">
              <button
                className="btn btn-outline-dark p-sm-1"
                onClick={clickhandler}
              >
                Apply Now
              </button>
            </div>
            <div className="col">5-6 LPA</div>
          </div>
        </div>
      </div>

      {/* card_end */}
    </div>
  );
};

export default JobCards;
