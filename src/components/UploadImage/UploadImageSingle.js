import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import uploadLogo from "../../assets/svg/upload.svg";

// Rendering individual images
// const Image = ({ image }) => {
//     return (
//         <div className="file-item">
//             <img
//                 alt={`img - ${image}`}
//                 src={image}
//                 className="file-img"
//             />
//         </div>
//     );
// };

// const ImagePreview = ({ images, master }) => {

//     // const renderImage = (image, index) => {
//     //     return <Image image={image} key={`${image.id}-image`} />;
//     // };
//     if (images.src) {
//         console.log(images.src)
//         return (
//             <section className="file-list"><Image image={images.src} /></section>
//         )
//     } else {
//         return (
//             <Box>
//                 <img src={master?.logo || uploadLogo} alt='' />
//             </Box>
//         );
//     }
// }

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
    // console.log(master.logo)
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


