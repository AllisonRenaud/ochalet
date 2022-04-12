import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import ListBookings from '../../components/ListBookings/ListBookings';

import './Dashboard.scss';

const DashboardBookings = () => (
  <div className="container flex">
    <DashboardSidebar />
    <ListBookings />
  </div>
);

export default DashboardBookings;
