import PropTypes from 'prop-types';

const IconUpload = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
  </svg>
);

IconUpload.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

IconUpload.defaultProps = {
  width: 471,
  height: 471
};

export default IconUpload;
