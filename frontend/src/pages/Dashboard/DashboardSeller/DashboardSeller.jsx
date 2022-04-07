import '../Dashboard.scss';
import { useState } from 'react';
import { Button } from 'antd';
import ListOffers from '../../../components/ListOffers/ListOffers';
import UpdateProfile from '../../../components/UpdateProfile/UpdateProfile';
import CreateOffer from '../../../components/CreateOffer/CreateOffer';
import ListBookings from '../../../components/ListBookings/ListBookings';

const DashboardSeller = () => {
  const [selectedTab, setSelectedTab] = useState('offers');

  return (
    <div className="container flex">
      <div className="dashboard__sidebar flex flex-col w-col-30">
        <div className="sidebar-item">
          <Button className="btn" type="primary" block size="small" htmlType="button" onClick={() => setSelectedTab('bookings')}>
            Gérer les réservations
          </Button>
        </div>
        <div className="sidebar-item">
          <Button className="btn" type="primary" block size="small" htmlType="button" onClick={() => setSelectedTab('offers')}>
            Mes annonces
          </Button>
        </div>
        <div className="sidebar-item">
          <Button className="btn" type="primary" block size="small" htmlType="button" onClick={() => setSelectedTab('newOffer')}>
            Créer une annonce
          </Button>
        </div>
        <div className="sidebar-item">
          <Button className="btn" type="primary" block size="small" htmlType="button" onClick={() => setSelectedTab('profile')}>
            Mon profil
          </Button>
        </div>
      </div>
      {selectedTab === 'bookings' && <ListBookings />}
      {selectedTab === 'offers' && <ListOffers />}
      {selectedTab === 'newOffer' && <CreateOffer />}
      {selectedTab === 'profile' && <UpdateProfile />}
    </div>
  );
};

export default DashboardSeller;
