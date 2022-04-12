import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import ListOffers from '../../components/ListOffers/ListOffers';

import './Dashboard.scss';

const DashboardOffers = () => (
  <div className="container flex">
    <DashboardSidebar />
    <ListOffers />
  </div>
);

export default DashboardOffers;
