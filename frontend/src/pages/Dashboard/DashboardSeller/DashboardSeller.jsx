import '../Dashboard.scss';
import { useState } from 'react';
import { Button } from 'antd';

import ListOffers from '../../../components/ListOffers/ListOffers';
import UpdateProfile from '../../../components/UpdateProfile/UpdateProfile';
import CreateOffer from '../../../components/CreateOffer/CreateOffer';
import ListBookings from '../../../components/ListBookings/ListBookings';
import DashboardSidebar from '../../../components/DashboardSidebar/DashboardSidebar';

const DashboardSeller = () => {
  const [selectedTab, setSelectedTab] = useState('offers');

  return (
    <div className="container flex">
      <DashboardSidebar />
      {selectedTab === 'bookings' && <ListBookings />}
      {selectedTab === 'offers' && <ListOffers />}
      {selectedTab === 'newOffer' && <CreateOffer />}
      {selectedTab === 'profile' && <UpdateProfile />}
    </div>
  );
};

export default DashboardSeller;
