import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import ListUsers from '../../components/ListUsers/ListUsers';

import './Dashboard.scss';

const DashboardUsers = () => (
  <div className="container flex">
    <div className="w-col-30">
      <DashboardSidebar />
    </div>
    <div className="w-col-70">
      <ListUsers />
    </div>
  </div>
);

export default DashboardUsers;
