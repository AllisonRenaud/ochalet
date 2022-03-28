import PropTypes from 'prop-types';

const IconUser = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

IconUser.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

IconUser.defaultProps = {
  width: 24,
  height: 24
};

export default IconUser;
