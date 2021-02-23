import React, { CSSProperties } from 'react';
import BoxImage from './BoxImage';
import BoxInfo from './BoxInfo';


function PicInnerBox() {
    return (
        <div style={rootStyle}>
            <BoxImage />
            <BoxInfo />
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '1.5rem',
    width: '80%',
    height: '80%',
}

export default PicInnerBox;