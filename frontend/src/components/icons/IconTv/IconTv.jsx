import PropTypes from 'prop-types';

const IconTv = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 511.999 511.999" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="var(--ci-primary-color, currentColor)"
      d="M472 88.5H302.627l72.5-72.5h-45.254l-72.5 72.5h-2.246l-72.5-72.5h-45.254l72.5 72.5H40a24.028 24.028 0 0 0-24 24v296a24.028 24.028 0 0 0 24 24h112V496h224v-63.5h96a24.028 24.028 0 0 0 24-24v-296a24.028 24.028 0 0 0-24-24ZM344 464H184v-31.5h160Zm120-63.5H48v-280h416Z"
    />
  </svg>
);

IconTv.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

IconTv.defaultProps = {
  width: 512,
  height: 512
};

export default IconTv;
