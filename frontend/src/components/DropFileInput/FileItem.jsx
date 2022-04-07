import PropTypes from 'prop-types';
import IconTrash from '../icons/IconTrash/IconTrash';
import IconFile from '../icons/IconFile/IconFile';

import './FileItem.scss';

const FileItem = ({ fileIndex, name, type, onRemove }) => (
  <div className="file flex items-center justify-between">
    <div className="flex items-center">
      <IconFile />
      <div className="file__name">{name}</div>
    </div>
    <button className="file__delete" onClick={() => onRemove && onRemove(fileIndex)} type="button">
      <IconTrash />
    </button>
  </div>
);

export default FileItem;

FileItem.propTypes = {
  type: PropTypes.string.isRequired,
  fileIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};
