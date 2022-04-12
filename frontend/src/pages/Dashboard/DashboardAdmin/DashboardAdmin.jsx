import '../Dashboard.scss';
import { useState } from 'react';
import { Button } from 'antd';
import ListOffers from '../../../components/ListOffers/ListOffers';
import ListUsers from '../../../components/ListUsers/ListUsers';
import DashboardSidebar from '../../../components/DashboardSidebar/DashboardSidebar';

const DashboardAdmin = () => {
  const [selectedTab, setSelectedTab] = useState('offers');
  return (
    <div className="container flex">
      <DashboardSidebar />

      {selectedTab === 'offers' && <ListOffers />}
      {selectedTab === 'users' && <ListUsers />}
    </div>
  );
};

export default DashboardAdmin;
