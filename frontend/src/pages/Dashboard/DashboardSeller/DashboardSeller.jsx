import '../Dashboard.scss';
import { useState } from 'react';
import { Button } from 'antd';
import ListOffers from '../../../components/ListOffers/ListOffers';
import UpdateProfile from '../../../components/UpdateProfile/UpdateProfile';

const DashboardSeller = () => {
  const [selectedTab, setSelectedTab] = useState('offers');

  return (
    <div className="container flex">
      <div className="dashboard__sidebar flex flex-col w-col-30">
        <div className="sidebar-item">
          <Button className="btn" type="primary" block htmlType="button" onClick={() => setSelectedTab('profile')}>
            Profil
          </Button>
        </div>
        <div className="sidebar-item">
          <Button className="btn" type="primary" block htmlType="button" onClick={() => setSelectedTab('offers')}>
            Offres
          </Button>
        </div>
      </div>
      {selectedTab === 'profile' && <UpdateProfile />}
      {selectedTab === 'offers' && <ListOffers />}
    </div>
  );
};

export default DashboardSeller;
