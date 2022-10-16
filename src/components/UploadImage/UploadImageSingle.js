import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import uploadLogo from "../../assets/png/upload.png";

const UploadImageSingle = ({ onDrop, open, image }) => {
    const { master } = useSelector((state) => state);

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({
            accept: {
                'image/*': ['.jpeg', '.jpg', '.png'],
            },
            onDrop,
            maxSize: 1000000
        });

    return (
        <div>
            <div {...getRootProps({ className: "dropzone" })}>
                <input className="input-zone" {...getInputProps()} />
                <div className="text-center">
                    <Box h="400px" w="400px" display="flex" justifyContent="center" alignItems="center" mb="20px">
                        {image?.src !== undefined ? <img src={image.src} /> : <img src={master?.logo || uploadLogo} alt='' />}
                    </Box>
                    <button color='#000' type="button" onClick={open} className="btn">
                        {/* <ImagePreview images={image.src} master={master} /> */}

                        <Text bg="black" py="5" mt="4" minW="400px">
                            {(master.logo || image.src !== undefined) ? "Change Logo" : "Upload Logo"}
                        </Text>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UploadImageSingle


