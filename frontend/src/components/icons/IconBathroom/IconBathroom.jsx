import PropTypes from 'prop-types';

const IconBathroom = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 511.999 511.999" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="var(--ci-primary-color, currentColor)"
      d="M464 280H80V100a51.258 51.258 0 0 1 15.113-36.485l.4-.4a51.691 51.691 0 0 1 58.6-10.162 79.1 79.1 0 0 0 11.778 96.627l10.951 10.951-20.157 20.158 22.626 22.626 20.157-20.157L311.157 71.471l20.157-20.157-22.627-22.627-20.158 20.157-10.951-10.951a79.086 79.086 0 0 0-100.929-8.976A83.61 83.61 0 0 0 72.887 40.485l-.4.4A83.054 83.054 0 0 0 48 100v180H16v32h32v30.7a23.95 23.95 0 0 0 1.232 7.589L79 439.589A23.969 23.969 0 0 0 101.766 456h12.9L103 496h33.333L148 456h208.1l12 40h33.4l-12-40h20.73A23.969 23.969 0 0 0 433 439.589l29.766-89.3A23.982 23.982 0 0 0 464 342.7V312h32v-32ZM188.52 60.52a47.025 47.025 0 0 1 66.431 0L265.9 71.471 199.471 137.9l-10.951-10.949a47.027 47.027 0 0 1 0-66.431ZM432 341.4 404.468 424H107.532L80 341.4V312h352Z"
    />
  </svg>
);

IconBathroom.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

IconBathroom.defaultProps = {
  width: 512,
  height: 512
};

export default IconBathroom;
