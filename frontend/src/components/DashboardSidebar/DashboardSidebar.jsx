import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const role = useSelector((state) => state.user?.profile?.role);

  return (
    <div className="dashboard__sidebar flex flex-col w-col-30">
      {role === 'admin' && (
        <div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/offers')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Toutes les annonces
            </Button>
          </div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/users')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Tous les utilisateurs
            </Button>
          </div>

          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/profile')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Mon profil
            </Button>
          </div>
        </div>
      )}
      {role === 'seller' && (
        <div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/bookings')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Gérer les réservations
            </Button>
          </div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/offers')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Mes annonces
            </Button>
          </div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/offer/create')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Créer une annonce
            </Button>
          </div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/profile')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Mon profil
            </Button>
          </div>
        </div>
      )}

      {role === 'client' && (
        <div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/bookings')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Mes réservations
            </Button>
          </div>
          <div className="sidebar-item">
            <Button
              onClick={() => navigate('/dashboard/profile')}
              className="btn"
              type="primary"
              block
              size="small"
              htmlType="button">
              Mon profil
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;
