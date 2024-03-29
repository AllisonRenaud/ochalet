import './Container.scss';
import PropTypes from 'prop-types';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
