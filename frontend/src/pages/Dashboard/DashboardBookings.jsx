import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import ListBookings from '../../components/ListBookings/ListBookings';

import './Dashboard.scss';

const DashboardBookings = () => (
  <div className="dashboard">
    <div className="container flex dashboard__container">
      <div className="w-col-30">
        <DashboardSidebar />
      </div>

      <div className="w-col-70">
        <ListBookings />
      </div>
    </div>
  </div>
);

export default DashboardBookings;
