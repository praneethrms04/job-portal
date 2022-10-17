import { ProSidebarProvider } from "react-pro-sidebar";

import AppicationStatus from '../components/AppicationStatus';
import Layout from "../components/SidebarLayout";

const Applications = () => {
  return (
    
      <div className="container-fluid">
      <ProSidebarProvider>
        <div className="row">
          <div className="col-3">
            <Layout />
          </div>
          <div className="col-9">
            <AppicationStatus />
          </div>
        </div>
      </ProSidebarProvider>
    </div>
      
  )
}

export default Applications