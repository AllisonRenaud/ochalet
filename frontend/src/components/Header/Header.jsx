import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = ({ isTransparent, isWhite }) => {
  const user = {
    role: 'seller'
  };

  return (
    <header className={`header ${isTransparent ? 'header--transparent' : ''} flex items-center justify-between`}>
      <div className={`header__logo ${isWhite ? 'header__logo--white' : ''}`}>
        <Link to="/locations">
          <Logo />
        </Link>
      </div>
      <div className="header__menu flex flex-row">
        {user.role === 'user' && (
          <div className="header__dashboard-link">
            <Link to="/dashboard/user">Tableau de bord</Link>
          </div>
        )}
        {user.role === 'seller' && (
          <div className="header__dashboard-link">
            <Link to="/dashboard/seller">Tableau de bord</Link>
          </div>
        )}
        {user.role === 'admin' && (
          <div className="header__dashboard-link">
            <Link to="/dashboard/admin">Tableau de bord</Link>
          </div>
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
