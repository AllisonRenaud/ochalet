import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile';

import './Dashboard.scss';

const DashboardProfile = () => (
  <div className="container flex">
    <div className="w-col-30">
      <DashboardSidebar />
    </div>
    <div className="w-col-70">
      <UpdateProfile />
    </div>
  </div>
);

export default DashboardProfile;
