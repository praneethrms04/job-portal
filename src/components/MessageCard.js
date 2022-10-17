import { Link } from "react-router-dom";
import { FaFacebookMessenger } from "react-icons/fa";


import MsgData from "../data/MsgCarrdData";
import Img from "../images/Img.png";


const MessageCard = () => {
  return (
    
      <div
        style={{
          width: "100%",
          border: "1px solid gray",
          padding: "10px",
          height: "100%",
          //   margin: "20px",
        }}
      >
        <div className="title bg-primary rounded text-white p-2 pt-3">
          {/* w1 */}

          <div className="row">
            <div className="col">
              <h3>
                <FaFacebookMessenger />
                Messages
              </h3>
            </div>
            <div className="col d-flex flex-row-reverse  mt-2">
              Mark as Read
            </div>
          </div>
        </div>
        <div>
          {MsgData.map((item, index) => {
            return (
              <div key={index}>
                <Link to="/" className="text-decoration-none">
                  <div className="row ">
                    <div className="col-4">
                      <img
                        className="rounded-circle mt-3"
                        width={100}
                        height={100}
                        src={Img}
                        alt="profissional img"
                      />
                    </div>
                    <div className="col-8">
                      <h3 className="">{item.name}</h3>
                      <p className="text-dark">{item.description}</p>
                      <p className="text-success fw-bold">{item.timeline}</p>
                    </div>
                    <hr />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* row2 */}
        {/* rows-ended */}
        <div className="text-center">
          <button type="button" className="btn btn-success w-100">
            Load More
          </button>
        </div>
      </div>
  );
};

export default MessageCard;
