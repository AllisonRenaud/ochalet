import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../store/actions/authActions';
import { cleanProfileAction, getProfileAction } from '../../store/actions/userActions';
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = ({ isTransparent, isWhite }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isConnected = useSelector((state) => state.auth.isConnected);
  const role = useSelector((state) => state.user?.profile?.role);

  const onLogoutHandler = () => {
    dispatch(logoutAction());
    dispatch(cleanProfileAction());
    navigate('/');
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      dispatch(getProfileAction());
    }
  }, []);

  return (
    <header className={`header ${isTransparent ? 'header--transparent' : ''} flex items-center justify-between`}>
      <div className={`header__logo ${isWhite ? 'header__logo--white' : ''}`}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__menu flex flex-row">
        {isConnected && role && (
          <>
            {role === 'client' && (
              <div className="header__dashboard-link">
                <Link to="/dashboard/bookings">Tableau de bord</Link>
              </div>
            )}
            {role === 'seller' && (
              <div className="header__dashboard-link">
                <Link to="/dashboard/bookings">Tableau de bord</Link>
              </div>
            )}
            {role === 'admin' && (
              <div className="header__dashboard-link">
                <Link to="/dashboard/users">Tableau de bord</Link>
              </div>
            )}
            <button type="button" onClick={onLogoutHandler}>
              <div className="header__dashboard-link">Se déconnecter</div>
            </button>
          </>
        )}

        {!isConnected && (
          <>
            <div className="header__dashboard-link">
              <Link to="/login/">Se connecter</Link>
            </div>
            <div className="header__dashboard-link">
              <Link to="/register/">S'inscrire</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isTransparent: PropTypes.bool,
  isWhite: PropTypes.bool
};

Header.defaultProps = {
  isTransparent: false,
  isWhite: false
};

export default Header;
