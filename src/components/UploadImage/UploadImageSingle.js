import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import RequiredText from '../RequiredText/RequiredText';
import UploadIcon from './UploadIcon';



const ImageWrapper = styled.div`
    img{
        width:100%;
        max-width:unset;
    }
`
const UploadButton = styled.button`
    width:100%;
`
const UploadImageSingle = ({ onDrop, open, image, imageError }) => {
    const { master } = useSelector((state) => state.templates);

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
                    <ImageWrapper className='' h="400px" w="400px" display="flex" justifyContent="center" alignItems="center" mb="20px">
                        {image?.src !== undefined ? <img src={image.src} alt="" /> : (master?.logo ? <img src={master?.logo} alt='' /> : <UploadIcon />)}
                    </ImageWrapper>
                    {imageError && <RequiredText/>}
                    <UploadButton color='#000' type="button" onClick={open} className="btn">
                        {/* <ImagePreview images={image.src} master={master} /> */}

                        <Text bg="black" py="5" mt="4" minW="400px">
                            {(master.logo || image.src !== undefined) ? "Change Logo" : "Upload Logo"}
                        </Text>
                    </UploadButton>
                </div>
            </div>
        </div>
    )
}

export default UploadImageSingle


