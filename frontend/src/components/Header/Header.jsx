import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = ({ isTransparent, isWhite }) => (
  <header className={`header ${isTransparent ? 'header--transparent' : ''}`}>
    <div className={`header__logo ${isWhite ? 'header__logo--white' : ''}`}>
      <Logo />
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
