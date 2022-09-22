import { useParams } from 'react-router-dom';
import CreateOffer from '../../components/CreateOffer/CreateOffer';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import UpdateOffer from '../UpdateOffer/UpdateOffer';

import './Dashboard.scss';

const DashboardCreateOffer = () => {
  const { offerId } = useParams();

  return (
    <div className="container flex">
      <div className="w-col-30">
        <DashboardSidebar />
      </div>
      <div className="w-col-70">{offerId === 'create' ? <CreateOffer /> : <UpdateOffer />}</div>
    </div>
  );
};

export default DashboardCreateOffer;
