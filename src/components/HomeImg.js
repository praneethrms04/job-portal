import  {Link} from "react-router-dom";

import heroImg from "../images/homeImg.png";
import Unauth from "../pages/Unauthorized"
import JobCards from "../components/JobCards"

import "../components/HomeImg.css";


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={heroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p className="lead fw-bold fs-1 ">
          The #1 Job Board for Hiring Designers and Creative Professionals
        </p>
        <p 
        // style={{ color: "#F07DEA" }} 
        className="text-white fs-5">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
        <div>
          <button type="button" className="btn btn-success btn-lg m-2">
            <Link to="/jobs" element={<JobCards />} className="text-decoration-none text-white">
            Find a Job
            </Link>
          </button>

          <button type="button" className="btn btn-outline-warning btn-lg m-2">
            <Link to="/unauthorized" element={<Unauth />} className="text-decoration-none text-white">
            Post a job
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
