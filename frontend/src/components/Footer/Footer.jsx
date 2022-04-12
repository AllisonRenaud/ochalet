import PropTypes from 'prop-types';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = ({ isTransparent }) => (
  <footer className={`footer ${isTransparent ? 'footer--transparent' : ''} flex justify-center items-center justify-evenly`}>
    <Link to="/cgv">
      <div> CGV </div>
    </Link>
    <Link to="/legal">
      <div> Mentions Légales </div>
    </Link>
  </footer>
);

Footer.propTypes = {
  isTransparent: PropTypes.bool
};

Footer.defaultProps = {
  isTransparent: false
};

export default Footer;
