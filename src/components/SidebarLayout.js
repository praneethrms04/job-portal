import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { GrStatusInfo } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import {
  AiFillDashboard,
  AiOutlineMail,
  AiOutlineBell,
  AiOutlineLogout,
} from "react-icons/ai";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar style={{ width: "100px" }} className="bg-dark">
        <div>
          <Menu>
            <MenuItem className="text-center lead mt-4">
              <h2>Job's adda</h2>
            </MenuItem>

            <MenuItem className="mt-4" icon={<AiFillDashboard />}>
              <Link to="/dashboard" className="text-dark text-decoration-none">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem className="mt-4" icon={<AiOutlineMail />}>
              <Link to="/dashboard" className="text-dark text-decoration-none">
                Messages
              </Link>
            </MenuItem>
            <MenuItem className="mt-4" icon={<AiOutlineBell />}>
              <Link to="/jobs" className="text-dark text-decoration-none">
                Jobs
              </Link>
            </MenuItem>
            <MenuItem className="mt-4" icon={<GrStatusInfo />}>
              <Link
                to="/applications"
                className="text-dark text-decoration-none"
              >
                Application Status
              </Link>
            </MenuItem>
            <MenuItem className="mt-4" icon={<CgProfile />}>
              <Link to="/" className="text-dark text-decoration-none">
                Profile
              </Link>
            </MenuItem>
            <MenuItem className="mt-4" icon={<AiOutlineLogout />}>
              <Link to="/login" className="text-dark text-decoration-none">
                LogOut
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default Layout;
