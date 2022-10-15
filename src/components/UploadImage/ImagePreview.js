import React from 'react';
import mainImage from '../../assets/png/main-image.png';

// Rendering individual images
const Image = ({ image }) => {
  return (
    <div className="file-item"
      style={{
        width: '100%',
        height: '415px',

      }}
    >
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        alt={`img - ${image.id}`}
        src={image?.src}
        className="file-img"
      />
    </div>
  );
};

const ImagePreview = ({ images, templateImage, template }) => {
  if (images?.src) {
    return (
      <Image image={images} key={`${images.id}-image`} />
    )
  } else if (templateImage) {
    return <div style={{
      width: '100%',
      height: '415px',
    }}><img style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} src={templateImage} alt="" /></div>
  } else {
    return <div style={{
      width: '100%',
      height: '415px',
    }}><img style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} src={mainImage} alt="" /></div>
  }
}

export default ImagePreview