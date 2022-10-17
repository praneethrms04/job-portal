import { ProSidebarProvider } from "react-pro-sidebar";

import Card from "../components/Card";
import Graph from "../components/Graph";
import Layout from "../components/SidebarLayout";
import MessageCard from "../components/MessageCard";

const DashBoard = () => {
  return (
    <div className="container-fluid">
      <ProSidebarProvider>
        <div className="row">
          <div className="col-3">
            <Layout />
          </div>
          <div className="col-9">
            <Card />
            <div className="row">
              <div className="col pt-4"><Graph /></div>
              <div className="col pt-4"><MessageCard /></div>
            </div>
          </div>
        </div>
      </ProSidebarProvider>
    </div>
  );
};

export default DashBoard;
