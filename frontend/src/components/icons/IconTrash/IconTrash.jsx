import PropTypes from 'prop-types';

const IconTrash = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
  </svg>
);

IconTrash.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

IconTrash.defaultProps = {
  width: 24,
  height: 24
};

export default IconTrash;
