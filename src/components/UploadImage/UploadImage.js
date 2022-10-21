import React from 'react';
import { useDropzone } from 'react-dropzone';
import UploadIcon from './UploadIcon';

const UploadImage = ({ onDrop, open, setSelectedFile }) => {

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        'image/*': ['.jpeg', '.jpg', '.png','.svg'],
      },
      onDrop,
      maxSize: 1000000
    });

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          <button color='#000' type="button" onClick={open} className="btn">
            {/* <img src={uploadLogo} alt="" /> */}
            <UploadIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadImage