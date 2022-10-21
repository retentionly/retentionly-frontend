import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import uploadLogo from "../../assets/svg/upload.svg";

const UploadImageTemplate = ({ onDrop, open, image }) => {
    const { master } = useSelector((state) => state);

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({
            accept: {
                'image/*': ['.jpeg', '.jpg', '.png','.svg'],
            },
            onDrop,
        });
    return (
        <div>
            <div {...getRootProps({ className: "dropzone" })}>
                <input className="input-zone" {...getInputProps()} />
                <div className="text-center">
                    <button color='#000' type="button" onClick={open} className="btn">
                        {/* <ImagePreview images={image.src} master={master} /> */}
                        {image?.src !== undefined ? <img src={image.src}/> : <img src={master?.logo || uploadLogo} alt='' />}
                        <Text bg="black" py="5" mt="4">
                            {(master.logo || image.src !== undefined) ? "Change Logo" : "Upload Logo"}
                            </Text>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UploadImageTemplate