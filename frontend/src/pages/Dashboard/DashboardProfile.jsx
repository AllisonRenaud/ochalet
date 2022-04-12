import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile';

import './Dashboard.scss';

const DashboardProfile = () => (
  <div className="container flex">
    <DashboardSidebar />
    <UpdateProfile />
  </div>
);

export default DashboardProfile;
