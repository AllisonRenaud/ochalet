import PropTypes from 'prop-types';

const IconFile = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokLinecap="round"
    strokeLinejoin="round">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <path d="M13 2v7h7" />
  </svg>
);

IconFile.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

IconFile.defaultProps = {
  width: 24,
  height: 24
};

export default IconFile;
