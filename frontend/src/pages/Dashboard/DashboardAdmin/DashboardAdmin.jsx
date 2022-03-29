import '../Dashboard.scss';
import { useState } from 'react';
import { Button } from 'antd';
import ListOffers from '../../../components/ListOffers/ListOffers';
import ListUsers from '../../../components/ListUsers/ListUsers';

const DashboardAdmin = () => {
  const [selectedTab, setSelectedTab] = useState('offers');
  return (
    <div className="container flex">
      <div className="dashboard__sidebar flex flex-col w-col-30">
        <div className="sidebar-item">
          <Button className="btn" type="primary" block htmlType="button" onClick={() => setSelectedTab('offers')}>
            Offres
          </Button>
        </div>
        <div className="sidebar-item">
          <Button className="btn" type="primary" block htmlType="button" onClick={() => setSelectedTab('users')}>
            Utilisateurs
          </Button>
        </div>
      </div>
      {selectedTab === 'offers' && <ListOffers />}
      {selectedTab === 'users' && <ListUsers />}
    </div>
  );
};

export default DashboardAdmin;
