import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import ListOffers from '../../components/ListOffers/ListOffers';

import './Dashboard.scss';

const DashboardOffers = () => (
  <div className="container flex">
    <div className="w-col-30">
      <DashboardSidebar />
    </div>
    <div className="w-col-70">
      <ListOffers />
    </div>
  </div>
);

export default DashboardOffers;
