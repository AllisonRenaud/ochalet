import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = ({ isTransparent, isWhite }) => (
  <header className={`header ${isTransparent ? 'header--transparent' : ''} flex items-center justify-between`}>
    <div className={`header__logo ${isWhite ? 'header__logo--white' : ''}`}>
      <Link to="/locations">
        <Logo />
      </Link>
    </div>
    <div className="header__menu">
      <Link to="/dashboard">
        <div className="header__dashboard-link">Tableau de bord</div>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  isTransparent: PropTypes.bool,
  isWhite: PropTypes.bool
};

Header.defaultProps = {
  isTransparent: false,
  isWhite: false
};

export default Header;
