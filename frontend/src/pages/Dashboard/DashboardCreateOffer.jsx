import { useParams } from 'react-router-dom';
import CreateOffer from '../../components/CreateOffer/CreateOffer';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import UpdateOffer from '../UpdateOffer/UpdateOffer';

import './Dashboard.scss';

const DashboardCreateOffer = () => {
  const { offerId } = useParams();

  return (
    <div className="container flex">
      <DashboardSidebar />
      {offerId === 'create' ? <CreateOffer /> : <UpdateOffer />}
    </div>
  );
};

export default DashboardCreateOffer;
