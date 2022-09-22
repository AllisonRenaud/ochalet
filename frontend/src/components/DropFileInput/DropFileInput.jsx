import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import FileItem from './FileItem';
import IconUpload from '../icons/IconUpload/IconUpload';

import './DropFileInput.scss';

const DropFileInput = ({ onFileChange, limitFiles }) => {
  const zoneRef = useRef(null);

  const [isFileValid, setIsFileValid] = useState('');
  const [isPassLimit, setIsPassLimit] = useState(false);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => {
    if (zoneRef) zoneRef?.current?.classList.add('dragover');
  };
  const onDragLeave = () => {
    if (zoneRef) zoneRef?.current?.classList.add('dragover');
  };

  const onDrop = () => {
    if (zoneRef) zoneRef?.current?.classList.remove('dragover');
  };

  const validateFile = (file) => {
    const fileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    return fileTypes.includes(file.type);
  };

  const onFileDrop = (event) => {
    const target = event?.target;
    const newFile = target.files[0];

    const validationFile = validateFile(newFile);
    setIsFileValid(!validationFile ? newFile.type : '');

    if (!validationFile) {
      return;
    }

    if (fileList.length >= limitFiles) {
      setIsPassLimit(true);
      return;
    }

    if (newFile) {
      const updatedFiles = [...fileList, newFile];
      setFileList(updatedFiles);
      onFileChange(updatedFiles);
    }
  };

  const onFileRemove = (fileIndex) => {
    const updatedFiles = fileList.filter((_, index) => index !== fileIndex);
    setFileList(updatedFiles);
    onFileChange(updatedFiles);
  };

  return (
    <div className="drop-file">
      <div
        className="drop-file__zone flex items-center justify-center"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        ref={zoneRef}>
        <div>
          <div className="flex justify-center mb-2">
            <IconUpload width={30} height={30} />
          </div>
          <div>Formats autorisés: .png, .jpg, .jpeg</div>
        </div>
        <input
          accept=".png, .jpg, .jpeg"
          className="drop-file__input"
          data-testid="drop-file"
          name="file"
          onChange={onFileDrop}
          type="file"
          value=""
        />
      </div>
      {isPassLimit && <div className="drop-file__error my-1">Vous avez dépassé la limite du nombre de fichiers autorisés</div>}
      {isFileValid.length > 0 && (
        <div className="drop-file__error my-1">Ce format n'est pas accepté. Les formats autorisés sont: .png, .jpg, .jpeg</div>
      )}
      <div className="drop-file__list">
        {fileList.length > 0 &&
          fileList.map((file, index) => (
            <div className="drop-file__list-item" key={uuidv4()}>
              <FileItem canRemove fileIndex={index} name={file.name} onRemove={onFileRemove} type={file.type} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropFileInput;

DropFileInput.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  limitFiles: PropTypes.number
};

DropFileInput.defaultProps = {
  limitFiles: 1
};
