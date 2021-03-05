import React, { CSSProperties } from 'react';

function StartPageImage() {
   const image = '../assets/puke.png';
   return (
      <div style={rootStyle}>
         <img style={imageStyle} src={image} alt="" />
      </div>
   );
}

const imageStyle: CSSProperties = {
   maxWidth: '15rem',
   borderRadius: '2rem',
   margin: '2rem 0',
};

const rootStyle: CSSProperties = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
};

export default StartPageImage;
