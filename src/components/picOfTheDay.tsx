import React, { CSSProperties } from 'react';
import PicInnerBox from './PicInnerBox';

interface Props {
    image: string
}

function PicOfTheDay(props:Props) {
    return (
        <div style={rootStyle}>
            <PicInnerBox />
            <img style={imageStyle}src={props.image}/>
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}

const imageStyle: CSSProperties = {
    margin: 'auto',
    width: '100%',
    objectFit: 'cover',
    height: '25rem'  
}

export default PicOfTheDay;