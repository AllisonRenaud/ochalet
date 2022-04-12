import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import ListUsers from '../../components/ListUsers/ListUsers';

import './Dashboard.scss';

const DashboardUsers = () => (
  <div className="container flex">
    <DashboardSidebar />
    <ListUsers />
  </div>
);

export default DashboardUsers;
