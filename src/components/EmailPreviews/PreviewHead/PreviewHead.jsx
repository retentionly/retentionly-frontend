import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import placholderLogo from "../../../assets/png/brand.png";
import ImagePreview from '../../UploadImage/ImagePreview';
export default function PreviewHead({logo,style,images,image,preview=true}){

    return(
        <>
        <PreviewHeadStyled {...style}>
            <img src={logo || placholderLogo} alt="" />
        </PreviewHeadStyled>
        {preview && <Box >
            <ImagePreview images={images} templateImage={image} />
        </Box>}
        
        </>
    )
}

export const PreviewHeadStyled = styled.div`
background:#fff;
display:flex;
justify-content:center;
img{
    height:70px;
}

`